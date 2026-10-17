import {
  withJSXClassNames
} from "./chunk-D4KRUHBV.js";

// src/jsx-runtime.ts
import { Fragment, jsx as reactJsx, jsxs as reactJsxs } from "react/jsx-runtime";
var jsx = (type, props, key) => reactJsx(type, withJSXClassNames(props), key);
var jsxs = (type, props, key) => reactJsxs(type, withJSXClassNames(props), key);
export {
  Fragment,
  jsx,
  jsxs
};
