import { T as TailwindColor, a as TailwindSpacing, b as TailwindRadius, c as TailwindShadow, d as TailwindClass } from './tailwind.types-BSQudz76.cjs';

interface ValueProps {
  bg?: TailwindColor | string;
  text?: TailwindColor | string;
  border?: TailwindColor | string;
  fill?: TailwindColor | string;
  stroke?: TailwindColor | string;
  font?: string;
  p?: TailwindSpacing | string;
  m?: TailwindSpacing | string;
  px?: TailwindSpacing | string;
  py?: TailwindSpacing | string;
  mx?: TailwindSpacing | string;
  my?: TailwindSpacing | string;
  gap?: TailwindSpacing | string;
  w?: TailwindSpacing | string;
  h?: TailwindSpacing | string;
  rounded?: TailwindRadius | string;
  shadow?: TailwindShadow | boolean | string;
}

interface LayoutProps {
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
}

declare module "react" {
  interface HTMLAttributes<T> extends LayoutProps, ValueProps {
    classNames?: (TailwindClass | string)[];
  }
  interface SVGAttributes<T> extends LayoutProps, ValueProps {
    classNames?: (TailwindClass | string)[];
  }
}

export type { LayoutProps, ValueProps };
