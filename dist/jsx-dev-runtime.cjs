"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/jsx-dev-runtime.ts
var jsx_dev_runtime_exports = {};
__export(jsx_dev_runtime_exports, {
  Fragment: () => import_jsx_dev_runtime.Fragment,
  jsxDEV: () => jsxDEV
});
module.exports = __toCommonJS(jsx_dev_runtime_exports);
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");

// src/class-names.ts
var joinClassNames = (values) => {
  const classes = [];
  const append = (value) => {
    if (!value) return;
    if (typeof value === "string") {
      classes.push(value);
    } else if (Array.isArray(value)) {
      value.forEach(append);
    } else {
      for (const [name, enabled] of Object.entries(value)) {
        if (enabled) classes.push(name);
      }
    }
  };
  values.forEach(append);
  return classes.join(" ");
};

// src/tailwind4.ts
var TAILWIND4_VALUE_PROPS = {
  ps: "ps",
  pe: "pe",
  pbs: "pbs",
  pbe: "pbe",
  ms: "ms",
  me: "me",
  mbs: "mbs",
  mbe: "mbe",
  "inset-s": "inset-s",
  "inset-e": "inset-e",
  "inset-bs": "inset-bs",
  "inset-be": "inset-be",
  "border-s": "border-s",
  "border-e": "border-e",
  "border-bs": "border-bs",
  "border-be": "border-be",
  "rounded-s": "rounded-s",
  "rounded-e": "rounded-e",
  "rounded-ss": "rounded-ss",
  "rounded-se": "rounded-se",
  "rounded-es": "rounded-es",
  "rounded-ee": "rounded-ee",
  "bg-linear": "bg-linear",
  "bg-radial": "bg-radial",
  "bg-conic": "bg-conic",
  "inset-shadow": "inset-shadow",
  "inset-ring": "inset-ring",
  "text-shadow": "text-shadow",
  mask: "mask",
  "mask-linear": "mask-linear",
  "mask-radial": "mask-radial",
  "mask-conic": "mask-conic",
  "mask-type": "mask-type",
  perspective: "perspective",
  "perspective-origin": "perspective-origin",
  "rotate-x": "rotate-x",
  "rotate-y": "rotate-y",
  "rotate-z": "rotate-z",
  "scale-z": "scale-z",
  "translate-x": "translate-x",
  "translate-y": "translate-y",
  "translate-z": "translate-z",
  backface: "backface",
  transform: "transform",
  scrollbar: "scrollbar",
  "scrollbar-thumb": "scrollbar-thumb",
  "scrollbar-track": "scrollbar-track",
  "scrollbar-gutter": "scrollbar-gutter",
  zoom: "zoom",
  tab: "tab"
};

// src/props.ts
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
  "not-sr-only",
  "@container",
  "@container-size"
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
  items: "items",
  justify: "justify",
  self: "self",
  "place-content": "place-content",
  "place-items": "place-items",
  "place-self": "place-self",
  order: "order",
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
  ...TAILWIND4_VALUE_PROPS
};
var MODIFIER_NAMES = [
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
  "rtl",
  "ltr",
  "motion-safe",
  "motion-reduce",
  "starting",
  "contrast-more",
  "contrast-less",
  "forced-colors",
  "pointer-fine",
  "pointer-coarse"
];
var BOOLEAN_VALUE_PROPS = ["shadow", "rounded", "border", "transition", "ring", "outline"];
var MODIFIERS = MODIFIER_NAMES;
var HYPHENATED_MODIFIERS = [...MODIFIERS].sort((a, b) => b.length - a.length);

// src/runtime.ts
var processModifierObject = (modifier, obj, classes) => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      if (MODIFIERS.includes(key)) {
        processModifierObject(`${modifier}:${key}`, value, classes);
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
var withClassNames = (props) => {
  if (!props) {
    return props;
  }
  if ("sx" in props && typeof props.sx === "object" && props.sx !== null) {
    const { sx, ...restProps } = props;
    return withClassNames({ ...restProps, ...sx });
  }
  const hasClassNames = "classNames" in props;
  const hasLayoutProps = LAYOUT_PROPS.some((k) => k in props);
  const hasValueProps = Object.keys(VALUE_PROPS_MAP).some((k) => k in props);
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
  const { classNames, className, ...rest } = props;
  const generatedClasses = [];
  const cleanRest = { ...rest };
  for (const prop of LAYOUT_PROPS) {
    if (prop in cleanRest && (typeof cleanRest[prop] === "boolean" || cleanRest[prop] == null)) {
      if (cleanRest[prop] === true) generatedClasses.push(prop);
      delete cleanRest[prop];
    }
  }
  for (const [prop, prefix] of Object.entries(VALUE_PROPS_MAP)) {
    if (prop in cleanRest) {
      const value = cleanRest[prop];
      if (typeof value === "string" || typeof value === "number") {
        generatedClasses.push(`${prefix}-${value}`);
        delete cleanRest[prop];
      } else if (BOOLEAN_VALUE_PROPS.includes(prop) && (typeof value === "boolean" || value == null)) {
        if (value === true) generatedClasses.push(prop);
        delete cleanRest[prop];
      }
    }
  }
  for (const modifier of MODIFIERS) {
    if (modifier in cleanRest) {
      const value = cleanRest[modifier];
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        processModifierObject(modifier, value, generatedClasses);
        delete cleanRest[modifier];
      }
    }
  }
  Object.keys(cleanRest).forEach((key) => {
    const modifier = HYPHENATED_MODIFIERS.find((name) => key.startsWith(`${name}-`));
    if (modifier) {
      const restKey = key.substring(modifier.length + 1);
      const value = cleanRest[key];
      if (restKey in VALUE_PROPS_MAP) {
        const prefix = VALUE_PROPS_MAP[restKey];
        if (typeof value === "string" || typeof value === "number") {
          generatedClasses.push(`${modifier}:${prefix}-${value}`);
          delete cleanRest[key];
        } else if (BOOLEAN_VALUE_PROPS.includes(restKey) && (typeof value === "boolean" || value == null)) {
          if (value === true) generatedClasses.push(`${modifier}:${restKey}`);
          delete cleanRest[key];
        }
      } else if (LAYOUT_PROPS.includes(restKey) && (typeof value === "boolean" || value == null)) {
        if (value === true) generatedClasses.push(`${modifier}:${restKey}`);
        delete cleanRest[key];
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

// src/jsx-dev-runtime.ts
var jsxDEV = (type, props, key, isStaticChildren, source, self) => (0, import_jsx_dev_runtime.jsxDEV)(type, withClassNames(props), key, isStaticChildren, source, self);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Fragment,
  jsxDEV
});
