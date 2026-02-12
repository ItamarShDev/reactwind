import type {
    TailwindClass,
    TailwindColor,
    TailwindRadius,
    TailwindShadow,
    TailwindSpacing,
} from "./tailwind.types";

export interface ValueProps {
  bg?: TailwindColor | string;
  text?: TailwindColor | string;
  border?: TailwindColor | string | boolean;
  fill?: TailwindColor | string;
  stroke?: TailwindColor | string;
  font?: string;
  p?: TailwindSpacing | string | number;
  m?: TailwindSpacing | string | number;
  px?: TailwindSpacing | string | number;
  py?: TailwindSpacing | string | number;
  mx?: TailwindSpacing | string | number;
  my?: TailwindSpacing | string | number;
  gap?: TailwindSpacing | string | number;
  w?: TailwindSpacing | string | number;
  h?: TailwindSpacing | string | number;
  rounded?: TailwindRadius | string | boolean;
  shadow?: TailwindShadow | boolean | string;
  z?: TailwindSpacing | string | number;
  mb?: TailwindSpacing | string | number;
  mt?: TailwindSpacing | string | number;
  ml?: TailwindSpacing | string | number;
  mr?: TailwindSpacing | string | number;
  pb?: TailwindSpacing | string | number;
  pt?: TailwindSpacing | string | number;
  pl?: TailwindSpacing | string | number;
  pr?: TailwindSpacing | string | number;

  "min-w"?: TailwindSpacing | string | number;
  "max-w"?: TailwindSpacing | string | number;
  "min-h"?: TailwindSpacing | string | number;
  "max-h"?: TailwindSpacing | string | number;
  overflow?: string;

  // Grid & Flexbox
  "grid-cols"?: string | number;
  "grid-rows"?: string | number;
  "col-span"?: string | number;
  "row-span"?: string | number;
  items?: string;
  justify?: string;
  self?: string;
  "place-content"?: string;
  "place-items"?: string;
  "place-self"?: string;
  order?: string | number;

  tracking?: string;
  leading?: string;
  decoration?: string;
  align?: string;
  whitespace?: string;
  break?: string;
  content?: string;

  opacity?: string | number;
  "bg-opacity"?: string | number;
  "text-opacity"?: string | number;
  "border-opacity"?: string | number;

  ring?: string | boolean;
  "ring-offset"?: string;
  outline?: string | boolean;
  divide?: string;

  "mix-blend"?: string;
  "backdrop-blur"?: string;

  blur?: string;
  brightness?: string;
  contrast?: string;
  grayscale?: string;
  "hue-rotate"?: string;
  invert?: string;
  saturate?: string;
  sepia?: string;
  "drop-shadow"?: string;

  transition?: string | boolean;
  duration?: string | number;
  ease?: string;
  delay?: string | number;
  animate?: string;

  cursor?: string;
  "pointer-events"?: string;
  resize?: string;
  select?: string;

  scale?: string | number;
  rotate?: string | number;
  translate?: string;
  skew?: string;
  origin?: string;

  // Layout & Position (new)
  top?: TailwindSpacing | string | number;
  right?: TailwindSpacing | string | number;
  bottom?: TailwindSpacing | string | number;
  left?: TailwindSpacing | string | number;
  inset?: TailwindSpacing | string | number;
  "inset-x"?: TailwindSpacing | string | number;
  "inset-y"?: TailwindSpacing | string | number;
  aspect?: "auto" | "square" | "video" | string;
  columns?: string | number;
  float?: "right" | "left" | "none" | "start" | "end" | string;
  clear?: "left" | "right" | "both" | "none" | "start" | "end" | string;

  // Flexbox & Grid (new)
  basis?: TailwindSpacing | string | number;
  "gap-x"?: TailwindSpacing | string | number;
  "gap-y"?: TailwindSpacing | string | number;
  "auto-cols"?: "auto" | "min" | "max" | "fr" | string;
  "auto-rows"?: "auto" | "min" | "max" | "fr" | string;
  "grid-flow"?: "row" | "col" | "dense" | "row-dense" | "col-dense" | string;
  "space-x"?: TailwindSpacing | string | number;
  "space-y"?: TailwindSpacing | string | number;
  "justify-items"?: "start" | "end" | "center" | "stretch" | string;
  "justify-self"?: "auto" | "start" | "end" | "center" | "stretch" | string;

  // Sizing (new)
  size?: TailwindSpacing | string | number;

  // Borders (new)
  "border-t"?: TailwindColor | string | number;
  "border-r"?: TailwindColor | string | number;
  "border-b"?: TailwindColor | string | number;
  "border-l"?: TailwindColor | string | number;
  "border-x"?: TailwindColor | string | number;
  "border-y"?: TailwindColor | string | number;
  "rounded-t"?: TailwindRadius | string;
  "rounded-r"?: TailwindRadius | string;
  "rounded-b"?: TailwindRadius | string;
  "rounded-l"?: TailwindRadius | string;
  "rounded-tl"?: TailwindRadius | string;
  "rounded-tr"?: TailwindRadius | string;
  "rounded-bl"?: TailwindRadius | string;
  "rounded-br"?: TailwindRadius | string;
  "border-style"?: "solid" | "dashed" | "dotted" | "double" | "hidden" | "none" | string;

  // Typography (new)
  "text-align"?: "left" | "center" | "right" | "justify" | "start" | "end" | string;
  "line-clamp"?: string | number;
  list?: "none" | "disc" | "decimal" | "inside" | "outside" | string;
  indent?: TailwindSpacing | string | number;

  // Backgrounds & Gradients (new)
  "bg-gradient"?: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl" | string;
  from?: TailwindColor | string;
  via?: TailwindColor | string;
  to?: TailwindColor | string;
  "bg-size"?: "auto" | "cover" | "contain" | string;
  "bg-position"?: "bottom" | "center" | "left" | "left-bottom" | "left-top" | "right" | "right-bottom" | "right-top" | "top" | string;
  "bg-repeat"?: "repeat" | "no-repeat" | "repeat-x" | "repeat-y" | "repeat-round" | "repeat-space" | string;

  // Interactivity (new)
  scroll?: "auto" | "smooth" | string;
  snap?: "start" | "end" | "center" | "align-none" | "normal" | "always" | string;
  touch?: "auto" | "none" | "pan-x" | "pan-left" | "pan-right" | "pan-y" | "pan-up" | "pan-down" | "pinch-zoom" | "manipulation" | string;
  "will-change"?: "auto" | "scroll" | "contents" | "transform" | string;
  caret?: TailwindColor | string;
  accent?: TailwindColor | string;

  // SVG (new)
  "stroke-width"?: string | number;
}

export interface LayoutProps {
  flex?: boolean;
  grid?: boolean;
  hidden?: boolean;
  block?: boolean;
  inline?: boolean;
  "inline-block"?: boolean;
  "inline-flex"?: boolean;
  "inline-grid"?: boolean;
  relative?: boolean;
  absolute?: boolean;
  fixed?: boolean;
  sticky?: boolean;
  static?: boolean;
  "flex-row"?: boolean;
  "flex-col"?: boolean;
  "flex-wrap"?: boolean;
  "flex-nowrap"?: boolean;
  "items-center"?: boolean;
  "items-start"?: boolean;
  "items-end"?: boolean;
  "justify-center"?: boolean;
  "justify-between"?: boolean;
  "justify-start"?: boolean;
  "justify-end"?: boolean;
  grow?: boolean;
  shrink?: boolean;


  italic?: boolean;
  "not-italic"?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  truncate?: boolean;


  visible?: boolean;
  invisible?: boolean;
  collapse?: boolean;


  "pointer-events-none"?: boolean;
  "pointer-events-auto"?: boolean;


  "sr-only"?: boolean;
  "not-sr-only"?: boolean;
}

type ModifierValue = Partial<ValueProps & LayoutProps> & {
  hover?: ModifierValue;
  focus?: ModifierValue;
  active?: ModifierValue;
  visited?: ModifierValue;
  disabled?: ModifierValue;
  "group-hover"?: ModifierValue;
  "group-focus"?: ModifierValue;
  "focus-within"?: ModifierValue;
  "focus-visible"?: ModifierValue;
  first?: ModifierValue;
  last?: ModifierValue;
  odd?: ModifierValue;
  even?: ModifierValue;
  checked?: ModifierValue;
  required?: ModifierValue;
  valid?: ModifierValue;
  invalid?: ModifierValue;
  sm?: ModifierValue;
  md?: ModifierValue;
  lg?: ModifierValue;
  xl?: ModifierValue;
  "2xl"?: ModifierValue;
  dark?: ModifierValue;
  print?: ModifierValue;
};

export interface ModifierProps {
  hover?: ModifierValue;
  focus?: ModifierValue;
  active?: ModifierValue;
  visited?: ModifierValue;
  disabled?: ModifierValue;
  "group-hover"?: ModifierValue;
  "group-focus"?: ModifierValue;
  "focus-within"?: ModifierValue;
  "focus-visible"?: ModifierValue;
  first?: ModifierValue;
  last?: ModifierValue;
  odd?: ModifierValue;
  even?: ModifierValue;
  checked?: ModifierValue;
  required?: ModifierValue;
  valid?: ModifierValue;
  invalid?: ModifierValue;
  sm?: ModifierValue;
  md?: ModifierValue;
  lg?: ModifierValue;
  xl?: ModifierValue;
  "2xl"?: ModifierValue;
  dark?: ModifierValue;
  print?: ModifierValue;
}

declare module "react" {

  interface HTMLAttributes<T> extends LayoutProps, ValueProps, ModifierProps {
    classNames?: (TailwindClass | string)[];
    [key: string]: any; // Allow for other props including modifiers like hover-bg, data-*, etc.
  }

  interface SVGAttributes<T> extends LayoutProps, ValueProps, ModifierProps {
    classNames?: (TailwindClass | string)[];
    [key: string]: any;
  }
}
