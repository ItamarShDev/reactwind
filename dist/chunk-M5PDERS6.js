// src/runtime.ts
var LAYOUT_PROPS = [
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
  "not-sr-only"
];
var VALUE_PROPS_MAP = {
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
  origin: "origin"
};
var MODIFIERS = [
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
  "print"
];
var joinClassNames = (classNames) => {
  if (!classNames || classNames.length === 0) {
    return "";
  }
  return classNames.filter(Boolean).join(" ");
};
var withClassNames = (props) => {
  if (!props) {
    return props;
  }
  const hasClassNames = "classNames" in props;
  const hasLayoutProps = LAYOUT_PROPS.some((k) => k in props);
  const hasValueProps = Object.keys(VALUE_PROPS_MAP).some((k) => k in props);
  const propsKeys = Object.keys(props);
  const hasModifiers = propsKeys.some((key) => {
    return MODIFIERS.some((mod) => key.startsWith(`${mod}-`));
  });
  if (!hasClassNames && !hasLayoutProps && !hasValueProps && !hasModifiers) {
    return props;
  }
  const { classNames, className, ...rest } = props;
  const generatedClasses = [];
  const cleanRest = { ...rest };
  for (const prop of LAYOUT_PROPS) {
    if (prop in cleanRest && cleanRest[prop] === true) {
      generatedClasses.push(prop);
      delete cleanRest[prop];
    }
  }
  for (const [prop, prefix] of Object.entries(VALUE_PROPS_MAP)) {
    if (prop in cleanRest) {
      const value = cleanRest[prop];
      if (typeof value === "string" || typeof value === "number") {
        generatedClasses.push(`${prefix}-${value}`);
        delete cleanRest[prop];
      } else if (value === true && (prop === "shadow" || prop === "rounded" || prop === "border" || prop === "transition")) {
        generatedClasses.push(prop);
        delete cleanRest[prop];
      }
    }
  }
  Object.keys(cleanRest).forEach((key) => {
    const firstHyphenIndex = key.indexOf("-");
    if (firstHyphenIndex === -1) return;
    const modifier = key.substring(0, firstHyphenIndex);
    if (MODIFIERS.includes(modifier)) {
      const restKey = key.substring(firstHyphenIndex + 1);
      const value = cleanRest[key];
      if (restKey in VALUE_PROPS_MAP) {
        const prefix = VALUE_PROPS_MAP[restKey];
        if (typeof value === "string" || typeof value === "number") {
          generatedClasses.push(`${modifier}:${prefix}-${value}`);
          delete cleanRest[key];
        } else if (value === true && (restKey === "shadow" || restKey === "rounded" || restKey === "border")) {
          generatedClasses.push(`${modifier}:${restKey}`);
          delete cleanRest[key];
        }
      } else if (LAYOUT_PROPS.includes(restKey)) {
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
    ...merged ? { className: merged } : {}
  };
};

export {
  withClassNames
};
