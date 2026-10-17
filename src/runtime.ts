import type { ClassValue } from "./class-names";
import { joinClassNames } from "./class-names";
import {
  LAYOUT_PROPS,
  VALUE_PROPS_MAP,
  MODIFIERS,
  HYPHENATED_MODIFIERS,
  BOOLEAN_VALUE_PROPS,
} from "./props";

const processModifierObject = (
  modifier: string,
  obj: Record<string, unknown>,
  classes: string[],
): void => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // Nested modifier: dark={{ hover: { bg: "slate-800" } }} → dark:hover:bg-slate-800
      if (MODIFIERS.includes(key)) {
        processModifierObject(`${modifier}:${key}`, value as Record<string, unknown>, classes);
      }
    } else if (key in VALUE_PROPS_MAP) {
      const prefix = VALUE_PROPS_MAP[key];
      if (typeof value === "string" || typeof value === "number") {
        classes.push(`${modifier}:${prefix}-${value}`);
      } else if (value === true && BOOLEAN_VALUE_PROPS.includes(key)) {
        classes.push(`${modifier}:${key}`);
      }
    } else if (LAYOUT_PROPS.includes(key) && value === true) {
      classes.push(`${modifier}:${key}`);
    }
  }
};

export const withClassNames = <T extends Record<string, unknown> | null>(props: T): any => {
  if (!props) {
    return props;
  }

  // 0. Flatten sx prop into props — reuses the entire existing pipeline
  if ("sx" in props && typeof props.sx === "object" && props.sx !== null) {
    const { sx, ...restProps } = props;
    return withClassNames({ ...restProps, ...(sx as Record<string, unknown>) });
  }

  const hasClassNames = "classNames" in props;
  const hasLayoutProps = LAYOUT_PROPS.some((k) => k in props);
  const hasValueProps = Object.keys(VALUE_PROPS_MAP).some((k) => k in props);

  // Quick check for modifiers (hyphenated like hover-bg or object like hover={{ bg: "red" }})
  const propsKeys = Object.keys(props);
  const hasHyphenatedModifiers = propsKeys.some((key) => {
    return MODIFIERS.some((mod) => key.startsWith(`${mod}-`));
  });
  const hasObjectModifiers = propsKeys.some((key) => {
    return MODIFIERS.includes(key) && typeof props[key] === "object" && props[key] !== null;
  });
  const hasModifiers = hasHyphenatedModifiers || hasObjectModifiers;

  if (!hasClassNames && !hasLayoutProps && !hasValueProps && !hasModifiers) {
    return props;
  }

  const { classNames, className, ...rest } = props as {
    classNames?: ClassValue[];
    className?: string;
    [key: string]: unknown;
  };

  const generatedClasses: string[] = [];
  const cleanRest = { ...rest };

  // 1. Handle Layout Props (boolean flags)
  for (const prop of LAYOUT_PROPS) {
    if (prop in cleanRest && (typeof cleanRest[prop] === "boolean" || cleanRest[prop] == null)) {
      if (cleanRest[prop] === true) generatedClasses.push(prop);
      delete cleanRest[prop];
    }
  }

  // 2. Handle Value Props (mapped props)
  for (const [prop, prefix] of Object.entries(VALUE_PROPS_MAP)) {
    if (prop in cleanRest) {
      const value = cleanRest[prop];
      if (typeof value === "string" || typeof value === "number") {
        generatedClasses.push(`${prefix}-${value}`);
        delete cleanRest[prop];
      } else if (
        BOOLEAN_VALUE_PROPS.includes(prop) &&
        (typeof value === "boolean" || value == null)
      ) {
        if (value === true) generatedClasses.push(prop);
        delete cleanRest[prop];
      }
    }
  }

  // 3. Handle Object Modifiers (e.g. hover={{ bg: "red-500", text: "white" }})
  for (const modifier of MODIFIERS) {
    if (modifier in cleanRest) {
      const value = cleanRest[modifier];
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        processModifierObject(modifier, value as Record<string, unknown>, generatedClasses);
        delete cleanRest[modifier];
      }
    }
  }

  // 4. Handle Hyphenated Modifiers (e.g. hover-bg="red-500" -> hover:bg-red-500)
  Object.keys(cleanRest).forEach((key) => {
    const modifier = HYPHENATED_MODIFIERS.find((name) => key.startsWith(`${name}-`));
    if (modifier) {
      const restKey = key.substring(modifier.length + 1);
      const value = cleanRest[key];

      // Check if the restKey is a known value prop (e.g. "bg" in "hover-bg")
      if (restKey in VALUE_PROPS_MAP) {
        const prefix = VALUE_PROPS_MAP[restKey];
        if (typeof value === "string" || typeof value === "number") {
          generatedClasses.push(`${modifier}:${prefix}-${value}`);
          delete cleanRest[key];
        } else if (
          BOOLEAN_VALUE_PROPS.includes(restKey) &&
          (typeof value === "boolean" || value == null)
        ) {
          if (value === true) generatedClasses.push(`${modifier}:${restKey}`);
          delete cleanRest[key];
        }
      }
      // Check if restKey is a layout prop (e.g. "flex" in "hover-flex")
      else if (LAYOUT_PROPS.includes(restKey) && (typeof value === "boolean" || value == null)) {
        if (value === true) generatedClasses.push(`${modifier}:${restKey}`);
        delete cleanRest[key];
      }
    }
  });

  const joined = joinClassNames(classNames || []);
  const merged = [className, ...generatedClasses, joined].filter(Boolean).join(" ");

  return {
    ...cleanRest,
    ...(merged ? { className: merged } : {}),
  } as T;
};
