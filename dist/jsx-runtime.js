import {
  withClassNames
} from "./chunk-M5PDERS6.js";

// src/jsx-runtime.ts
import { Fragment, jsx as reactJsx, jsxs as reactJsxs } from "react/jsx-runtime";
var jsx = (type, props, key) => reactJsx(type, withClassNames(props), key);
var jsxs = (type, props, key) => reactJsxs(type, withClassNames(props), key);
export {
  Fragment,
  jsx,
  jsxs
};
