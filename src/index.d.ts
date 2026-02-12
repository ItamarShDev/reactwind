import React from "react";
import type {
  TailwindClass,
  TailwindColor,
  TailwindSpacing,
  TailwindRadius,
  TailwindShadow,
} from "./tailwind.types";

export interface ValueProps {
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
}

export type SxProp = Partial<ValueProps & LayoutProps>;

declare module "react" {
  interface HTMLAttributes<T> extends LayoutProps, ValueProps {
    classNames?: (TailwindClass | string)[];
    sx?: SxProp;
  }
  interface SVGAttributes<T> extends LayoutProps, ValueProps {
    classNames?: (TailwindClass | string)[];
    sx?: SxProp;
  }
}
