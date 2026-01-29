
import fs from "fs";
import path from "path";


const spacing = ["0", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32", "40", "48", "56", "64", "px"];
const spacingUnion = spacing.map(s => `"${s}"`).join(" | ");


const colors = ["transparent", "current", "black", "white",
    ...["red", "blue", "green", "yellow", "gray", "indigo", "purple", "pink", "slate", "zinc", "neutral", "stone", "orange", "amber", "lime", "emerald", "teal", "cyan", "sky", "violet", "fuchsia", "rose"]
        .flatMap(c => ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"].map(s => `${c}-${s}`))
];
const colorUnion = colors.map(c => `"${c}"`).join(" | ");


const radius = ["none", "sm", "DEFAULT", "md", "lg", "xl", "2xl", "3xl", "full"];
const radiusUnion = radius.map(r => `"${r}"`).join(" | ");


const shadow = ["sm", "DEFAULT", "md", "lg", "xl", "2xl", "inner", "none"];
const shadowUnion = shadow.map(s => `"${s}"`).join(" | ");


const standardClasses = [
    
    "container", "flex", "inline-flex", "grid", "inline-grid", "hidden", "block", "inline", "inline-block",
    "flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse",
    "flex-wrap", "flex-wrap-reverse", "flex-nowrap",
    "items-start", "items-end", "items-center", "items-baseline", "items-stretch",
    "justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly",
    "content-center", "content-start", "content-end", "content-between", "content-around", "content-evenly",
    "grow", "grow-0", "shrink", "shrink-0",
    "relative", "absolute", "fixed", "sticky", "static",
    "z-0", "z-10", "z-20", "z-30", "z-40", "z-50", "z-auto",

    
    ...spacing.flatMap(s => [
        `p-${s}`, `m-${s}`, `px-${s}`, `py-${s}`, `mx-${s}`, `my-${s}`,
        `pt-${s}`, `pr-${s}`, `pb-${s}`, `pl-${s}`, `mt-${s}`, `mr-${s}`, `mb-${s}`, `ml-${s}`,
        `w-${s}`, `h-${s}`, `min-w-${s}`, `max-w-${s}`, `min-h-${s}`, `max-h-${s}`, `gap-${s}`
    ]),

    
    ...colors.flatMap(c => [`bg-${c}`, `text-${c}`, `border-${c}`, `fill-${c}`, `stroke-${c}`]),

    
    "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl",
    "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black",
    "underline", "no-underline", "line-through",

    
    ...radius.map(r => r === "DEFAULT" ? "rounded" : `rounded-${r}`),
    "border", "border-0", "border-2", "border-4", "border-8",

    
    ...shadow.map(s => s === "DEFAULT" ? "shadow" : `shadow-${s}`),
    "opacity-0", "opacity-25", "opacity-50", "opacity-75", "opacity-100",

    
    "cursor-pointer", "cursor-wait", "cursor-text", "cursor-move", "cursor-not-allowed"
];

const content = `
// This file is generated. Do not edit manually.

export type TailwindSpacing = 
  | ${spacingUnion}
  | (string & {});

export type TailwindColor = 
  | ${colorUnion}
  | (string & {});

export type TailwindRadius = 
  | ${radiusUnion}
  | (string & {});

export type TailwindShadow = 
  | ${shadowUnion}
  | (string & {});

export type TailwindClass = 
  | "${standardClasses.join('"\n  | "')}"
  | (string & {});
`;

fs.writeFileSync(path.join(process.cwd(), "src", "tailwind.types.ts"), content);
console.log(`Generated types with ${standardClasses.length} reference classes.`);
