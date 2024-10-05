// export async function getCollectionAug<C extends keyof AnyEntryMap>(
//   collection: C,
// ): Promise<CollectionEntryAug<C>[]> {
//   let entries = await getCollection(collection);
//   let augmentedEntries = await Promise.all(entries.map(augmentEntry));

import type { AnyEntryMap, CollectionEntry } from "astro:content";

//   // sort by date, then by slug
//   return augmentedEntries.sort((a, b) => {
//     if (a.date > b.date) {
//       return -1;
//     } else if (a.date < b.date) {
//       return 1;
//     } else {
//       return a.slug.localeCompare(b.slug);
//     }
//   });
// }

// export function sortCollection<C extends keyof AnyEntryMap>(
//   collection: CollectionEntry<C>[],
// ): CollectionEntry<C>[] {
//   return collection.sort((a, b) => {
//     if (a.data.date > b.data.date) {
//       return -1;
//     } else if (a.data.date < b.data.date) {
//       return 1;
//     } else {
//       return a.slug.localeCompare(b.slug);
//     }
//   });
// }

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
