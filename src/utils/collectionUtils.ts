import type { GetStaticPathsResult } from "astro";
import {
  getCollection,
  type AnyEntryMap,
  type CollectionEntry,
  type ContentEntryMap,
} from "astro:content";

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

export async function getStaticPathsForCollection(
  collectionName: keyof ContentEntryMap,
) {
  let paths: GetStaticPathsResult = [];

  for (const entry of await getCollection(collectionName)) {
    console.debug(`[SSG][${collectionName}] Processing entry: ${entry.slug}`);
    paths.push({ params: { slug: entry.slug }, props: { entry } });
  }
  return paths;
}
