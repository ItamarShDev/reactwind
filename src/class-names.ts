export type ClassValue =
  | string
  | false
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

export const joinClassNames = (values: ClassValue[]): string => {
  const classes: string[] = [];
  const append = (value: ClassValue): void => {
    if (!value) return;
    if (typeof value === "string") {
      classes.push(value);
    } else if (Array.isArray(value)) {
      value.forEach(append);
    } else {
      for (const [name, enabled] of Object.entries(value)) {
        if (enabled) classes.push(name);
      }
    }
  };
  values.forEach(append);
  return classes.join(" ");
};
