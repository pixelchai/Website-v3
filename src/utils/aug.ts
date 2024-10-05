import {
  getEntries,
  type AnyEntryMap,
  type CollectionEntry,
  getCollection,
  getEntry,
  type DataEntryMap,
} from "astro:content";
import path from "path";

/*
This file contains utility functions to augment the traditional behaviour of Astro collections
to mimic the behaviour of Jekyll collections (https://jekyllrb.com/docs/posts/#creating-posts).

That is, the default slug and date of a post are extracted from the filename, and are accessible via
the `slug` (overwritten) and `date` (new) properties of the entry.

This is because there is currently no way of modifying default slug behaviour in Astro collections.
See this proposal for further discussion and tracking: https://github.com/withastro/roadmap/discussions/575.

Make sure to always use these functions instead of the default Astro functions when working with collections.
I would also recommend to never use getEntry by querying for the slug, as Astro is not aware of our overriden slug values.
If absolutely necessary, query using the id instead, which I do not modify in this project.
*/

/**
 * Extract slug and date from the provided filepath,
 * mimicing behaviour from Jekyll.
 */
export async function parseFilepath(filepath: string): Promise<{
  slug: string;
  date: Date;
}> {
  let baseName = path.basename(filepath, path.extname(filepath));
  let parts = baseName.split("-");
  let date = new Date(parts.slice(0, 3).join("-"));
  let slug = parts.slice(3).join("-");
  return { slug, date };
}

/**
 * Augment an entry with slug and date properties, parsed from its filepath.
 */
export async function augmentEntry<C extends keyof AnyEntryMap>(
  entry: CollectionEntry<C>,
): Promise<
  // the type of 'slug' is relaxed to be any string
  Omit<CollectionEntry<C>, "slug"> & {
    slug: string;
    date: Date;
  }
> {
  let { slug, date } = await parseFilepath(entry.id);

  return {
    ...entry,

    // || to allow for file-based metadata being overriden in frontmatter
    slug: entry.data.slug || slug,
    date: entry.data.date || date,
  };
}

export async function getCollectionAug<C extends keyof AnyEntryMap>(
  collection: C,
): Promise<
  (Omit<CollectionEntry<C>, "slug"> & {
    slug: string;
    date: Date;
  })[]
> {
  let entries = await getCollection(collection);
  return Promise.all(entries.map(augmentEntry));
}

// export async function getEntryAug<
//   C extends keyof AnyEntryMap,
//   E extends keyof AnyEntryMap[C],
// >(collection: C, id: E): Promise<any> {
//   let entry = await getEntry(collection, id);
//   return augmentEntry(await getEntry(collection, id));
// }
// // ): Promise<
// //   Omit<CollectionEntry<C>, "slug"> & {
// //     slug: string;
// //     date: Date;
// //   }
// //   DataEntryMap
