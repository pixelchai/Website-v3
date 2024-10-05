import type { AnyEntryMap, CollectionEntry } from "astro:content";

type CollectionEntryWithDate<C extends keyof AnyEntryMap> =
  CollectionEntry<C> & {
    data: {
      date: Date;
    };
  };

export function dateSorter<C extends keyof AnyEntryMap>(
  a: CollectionEntryWithDate<C>,
  b: CollectionEntryWithDate<C>,
): number {
  if (a.data.date > b.data.date) {
    return -1;
  } else if (a.data.date < b.data.date) {
    return 1;
  } else {
    return a.slug.localeCompare(b.slug);
  }
}
