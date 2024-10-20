export function combineClasses(...classes: (string | undefined)[]): string {
  // combine string of clases (separated by space) and remove undefined values, remove duplicates
  return Array.from(new Set(classes.filter(Boolean))).join(" ");
}
