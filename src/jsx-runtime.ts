import "./types";
import type React from "react";
import { Fragment, jsx as reactJsx, jsxs as reactJsxs } from "react/jsx-runtime";

import { withClassNames } from "./runtime";

export { Fragment };
export type { JSX } from "react/jsx-runtime";

export const jsx = (
  type: React.ElementType,
  props: Record<string, unknown> | null,
  key?: string,
): React.ReactElement => reactJsx(type, withClassNames(props), key);

export const jsxs = (
  type: React.ElementType,
  props: Record<string, unknown> | null,
  key?: string,
): React.ReactElement => reactJsxs(type, withClassNames(props), key);
