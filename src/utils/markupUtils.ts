export function combineClasses(...classes: (string | undefined)[]): string {
  // combine string of clases (separated by space) and remove undefined values, remove duplicates
  return Array.from(new Set(classes.filter(Boolean))).join(" ");
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function getYear(date: Date): number {
  return date.getFullYear();
}
