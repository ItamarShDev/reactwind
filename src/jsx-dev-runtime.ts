import "./types";
import type React from "react";
import { Fragment, jsxDEV as reactJsxDEV } from "react/jsx-dev-runtime";

import { withClassNames } from "./runtime";

export { Fragment };
export type { JSX } from "react/jsx-runtime";

export const jsxDEV = (
  type: React.ElementType,
  props: Record<string, unknown> | null,
  key: string | undefined,
  isStaticChildren: boolean,
  source: unknown,
  self: unknown,
): React.ReactElement =>
  reactJsxDEV(type, withClassNames(props), key, isStaticChildren, source as any, self as any);
