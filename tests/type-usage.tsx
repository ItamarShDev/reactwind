import type { ClassValue, SxProp, ValueProps, ModifierProps } from "../src";

const classes: ClassValue[] = [
  "flex",
  false,
  null,
  undefined,
  ["items-center", { "font-bold": true, hidden: false }],
];
const utilities: ValueProps = {
  ps: 4,
  pbs: 2,
  "text-shadow": "sm",
  "scrollbar-thumb": "blue-500",
  "scrollbar-gutter": "stable",
  "bg-linear": "to-r",
  zoom: 125,
  transform: "3d",
};
const modifiers: ModifierProps = {
  "motion-safe": { hover: { "rotate-y": 12 } },
  rtl: { ps: 8 },
  starting: { opacity: 0 },
};
const sx: SxProp = { ...utilities, ...modifiers, "@container-size": true };

export const typedElement = <div sx={sx} classNames={classes} />;
export const typedSvg = (
  <svg
    mask="url(#shape)"
    transform="translate(2 3)"
    sx={{ mask: "none", transform: "3d" }}
    classNames={classes}
  />
);
export const typedInput = <input size={20} sx={{ size: 8 }} />;
export const typedSelect = <select size={4} sx={{ size: 8 }} />;

// @ts-expect-error Native input size is numeric; styling size belongs in sx.
export const invalidInput = <input size="sm" />;
// @ts-expect-error Native SVG transform is a string; numeric utility values belong in sx.
export const invalidSvg = <svg transform={12} />;

// @ts-expect-error Unknown shorthand utilities are not part of sx.
const invalidSx: SxProp = { unknownUtility: "value" };
// @ts-expect-error Modifiers contain shorthand objects, not strings.
const invalidModifier: ModifierProps = { "motion-safe": "rotate-y-12" };
void invalidSx;
void invalidModifier;
