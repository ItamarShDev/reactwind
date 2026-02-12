type ClassNamesProp = (string | undefined)[];

const LAYOUT_PROPS = [
  "flex",
  "grid",
  "hidden",
  "block",
  "inline",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "relative",
  "absolute",
  "fixed",
  "sticky",
  "static",
  "flex-row",
  "flex-col",
  "flex-wrap",
  "flex-nowrap",
  "items-center",
  "items-start",
  "items-end",
  "justify-center",
  "justify-between",
  "justify-start",
  "justify-end",
  "grow",
  "shrink",
  "italic",
  "not-italic",
  "underline",
  "uppercase",
  "lowercase",
  "capitalize",
  "truncate",
  "visible",
  "invisible",
  "collapse",
  "pointer-events-none",
  "pointer-events-auto",
  "sr-only",
  "not-sr-only",
];

const VALUE_PROPS_MAP: Record<string, string> = {
  bg: "bg",
  text: "text",
  border: "border",
  fill: "fill",
  stroke: "stroke",
  p: "p",
  m: "m",
  px: "px",
  py: "py",
  mx: "mx",
  my: "my",
  gap: "gap",
  w: "w",
  h: "h",
  rounded: "rounded",
  shadow: "shadow",
  font: "font",
  z: "z",
  mb: "mb",
  mt: "mt",
  ml: "ml",
  mr: "mr",
  pb: "pb",
  pt: "pt",
  pl: "pl",
  pr: "pr",
  tracking: "tracking",
  leading: "leading",
  "max-w": "max-w",
  "min-w": "min-w",
  "min-h": "min-h",
  "max-h": "max-h",
  "grid-cols": "grid-cols",
  "col-span": "col-span",
  "row-span": "row-span",
  "grid-rows": "grid-rows",
  "items": "items",
  "justify": "justify",
  "self": "self",
  "place-content": "place-content",
  "place-items": "place-items",
  "place-self": "place-self",
  "order": "order",
  overflow: "overflow",
  decoration: "decoration",

  whitespace: "whitespace",
  break: "break",
  content: "content",
  opacity: "opacity",
  "bg-opacity": "bg-opacity",
  "text-opacity": "text-opacity",
  "border-opacity": "border-opacity",
  ring: "ring",
  "ring-offset": "ring-offset",
  outline: "outline",
  divide: "divide",
  "mix-blend": "mix-blend",
  "backdrop-blur": "backdrop-blur",
  blur: "blur",
  brightness: "brightness",
  contrast: "contrast",
  grayscale: "grayscale",
  "hue-rotate": "hue-rotate",
  invert: "invert",
  saturate: "saturate",
  sepia: "sepia",
  "drop-shadow": "drop-shadow",
  transition: "transition",
  duration: "duration",
  ease: "ease",
  delay: "delay",
  animate: "animate",
  cursor: "cursor",
  "pointer-events": "pointer-events",
  resize: "resize",
  select: "select",
  scale: "scale",
  rotate: "rotate",
  translate: "translate",
  skew: "skew",
  origin: "origin",

  // Layout & Position
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
  inset: "inset",
  "inset-x": "inset-x",
  "inset-y": "inset-y",
  aspect: "aspect",
  columns: "columns",
  float: "float",
  clear: "clear",

  // Flexbox & Grid
  basis: "basis",
  "gap-x": "gap-x",
  "gap-y": "gap-y",
  "auto-cols": "auto-cols",
  "auto-rows": "auto-rows",
  "grid-flow": "grid-flow",
  "space-x": "space-x",
  "space-y": "space-y",
  "justify-items": "justify-items",
  "justify-self": "justify-self",

  // Sizing
  size: "size",

  // Borders
  "border-t": "border-t",
  "border-r": "border-r",
  "border-b": "border-b",
  "border-l": "border-l",
  "border-x": "border-x",
  "border-y": "border-y",
  "rounded-t": "rounded-t",
  "rounded-r": "rounded-r",
  "rounded-b": "rounded-b",
  "rounded-l": "rounded-l",
  "rounded-tl": "rounded-tl",
  "rounded-tr": "rounded-tr",
  "rounded-bl": "rounded-bl",
  "rounded-br": "rounded-br",
  "border-style": "border",

  // Typography
  "text-align": "text",
  align: "align",
  "line-clamp": "line-clamp",
  list: "list",
  indent: "indent",

  // Backgrounds & Gradients
  "bg-gradient": "bg-gradient",
  from: "from",
  via: "via",
  to: "to",
  "bg-size": "bg",
  "bg-position": "bg",
  "bg-repeat": "bg",

  // Interactivity
  scroll: "scroll",
  snap: "snap",
  touch: "touch",
  "will-change": "will-change",
  caret: "caret",
  accent: "accent",

  // SVG
  "stroke-width": "stroke",
};

const MODIFIERS = [
  "hover",
  "focus",
  "active",
  "visited",
  "disabled",
  "group-hover",
  "group-focus",
  "focus-within",
  "focus-visible",
  "target",
  "first",
  "last",
  "only",
  "odd",
  "even",
  "first-of-type",
  "last-of-type",
  "only-of-type",
  "empty",
  "checked",
  "indeterminate",
  "default",
  "required",
  "valid",
  "invalid",
  "in-range",
  "out-of-range",
  "placeholder-shown",
  "autofill",
  "read-only",
  "open",

  // Responsive breakpoints
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",

  // Dark mode
  "dark",

  // Print
  "print",
];

const BOOLEAN_VALUE_PROPS = ["shadow", "rounded", "border", "transition", "ring", "outline"];

const joinClassNames = (classNames: ClassNamesProp): string => {
  if (!classNames || classNames.length === 0) {
    return "";
  }

  return classNames.filter(Boolean).join(" ");
};

const processModifierObject = (
  modifier: string,
  obj: Record<string, unknown>,
  classes: string[]
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
  const hasHyphenatedModifiers = propsKeys.some(key => {
    return MODIFIERS.some(mod => key.startsWith(`${mod}-`));
  });
  const hasObjectModifiers = propsKeys.some(key => {
    return MODIFIERS.includes(key) && typeof props[key] === "object" && props[key] !== null;
  });
  const hasModifiers = hasHyphenatedModifiers || hasObjectModifiers;

  if (!hasClassNames && !hasLayoutProps && !hasValueProps && !hasModifiers) {
    return props;
  }

  const { classNames, className, ...rest } = props as {
    classNames?: ClassNamesProp;
    className?: string;
    [key: string]: unknown;
  };

  const generatedClasses: string[] = [];
  const cleanRest = { ...rest };

  // 1. Handle Layout Props (boolean flags)
  for (const prop of LAYOUT_PROPS) {
    if (prop in cleanRest && cleanRest[prop] === true) {
      generatedClasses.push(prop);
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
      } else if (value === true && BOOLEAN_VALUE_PROPS.includes(prop)) {
        generatedClasses.push(prop);
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
  Object.keys(cleanRest).forEach(key => {
    // Find longest matching modifier to handle overlapping prefixes if any (though currently distinct)
    // Actually simpler: split by first hyphen.
    const firstHyphenIndex = key.indexOf('-');
    if (firstHyphenIndex === -1) return;

    const modifier = key.substring(0, firstHyphenIndex);
    if (MODIFIERS.includes(modifier)) {
      const restKey = key.substring(firstHyphenIndex + 1);
      const value = cleanRest[key];

      // Check if the restKey is a known value prop (e.g. "bg" in "hover-bg")
      if (restKey in VALUE_PROPS_MAP) {
        const prefix = VALUE_PROPS_MAP[restKey];
        if (typeof value === "string" || typeof value === "number") {
          generatedClasses.push(`${modifier}:${prefix}-${value}`);
          delete cleanRest[key];
        } else if (value === true && BOOLEAN_VALUE_PROPS.includes(restKey)) {
          generatedClasses.push(`${modifier}:${restKey}`);
          delete cleanRest[key];
        }
      }
      // Check if restKey is a layout prop (e.g. "flex" in "hover-flex")
      else if (LAYOUT_PROPS.includes(restKey)) {
        if (value === true) {
          generatedClasses.push(`${modifier}:${restKey}`);
          delete cleanRest[key];
        }
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

