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
  overflow: "overflow",
  decoration: "decoration",

  whitespace: "whitespace",
  break: "break",
  content: "content",
  opacity: "opacity",
  "bg-opacity": "bg-opacity",
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
};

const joinClassNames = (classNames: ClassNamesProp): string => {
  if (!classNames || classNames.length === 0) {
    return "";
  }

  return classNames.filter(Boolean).join(" ");
};

export const withClassNames = <T extends Record<string, unknown> | null>(props: T): any => {
  if (!props) {
    return props;
  }

  const hasClassNames = "classNames" in props;
  const hasLayoutProps = LAYOUT_PROPS.some((k) => k in props);
  const hasValueProps = Object.keys(VALUE_PROPS_MAP).some((k) => k in props);

  if (!hasClassNames && !hasLayoutProps && !hasValueProps) {
    return props;
  }

  const { classNames, className, ...rest } = props as {
    classNames?: ClassNamesProp;
    className?: string;
    [key: string]: unknown;
  };

  const generatedClasses: string[] = [];
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
      } else if (value === true && (prop === "shadow" || prop === "rounded")) {
        generatedClasses.push(prop);
        delete cleanRest[prop];
      }
    }
  }

  const joined = joinClassNames(classNames || []);
  const merged = [className, ...generatedClasses, joined].filter(Boolean).join(" ");

  return {
    ...cleanRest,
    ...(merged ? { className: merged } : {}),
  } as T;
};

