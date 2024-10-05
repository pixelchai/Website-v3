// import {
//   type AnyEntryMap,
//   type CollectionEntry,
//   getCollection,
// } from "astro:content";
// import path from "path";

// /*
// This file contains utility functions to augment the traditional behaviour of Astro collections
// to mimic the behaviour of Jekyll collections (https://jekyllrb.com/docs/posts/#creating-posts).

// That is, the default slug and date of a post are extracted from the filename, and are accessible via
// the `slug` (overwritten) and `date` (new) properties of the entry.

// This is because there is currently no way of modifying default slug behaviour in Astro collections.
// See this proposal for further discussion and tracking: https://github.com/withastro/roadmap/discussions/575.

// Make sure to always use these functions instead of the default Astro functions when working with collections.
// I would also recommend to never use getEntry by querying for the slug, as Astro is not aware of our overriden slug values.
// If absolutely necessary, query using the id instead, which I do not modify in this project.
// */

// /**
//  * Extract slug and date from the provided filepath,
//  * mimicing behaviour from Jekyll.
//  */
// export async function parseFilepath(filepath: string): Promise<{
//   slug: string;
//   date: Date;
// }> {
//   let baseName = path.basename(filepath, path.extname(filepath));
//   let parts = baseName.split("-");
//   let date = new Date(parts.slice(0, 3).join("-"));
//   let slug = parts.slice(3).join("-");
//   return { slug, date };
// }

// export type CollectionEntryAug<C extends keyof AnyEntryMap> =
//   // the type of 'slug' is relaxed to be any string
//   // also a new property 'date' is added
//   Omit<CollectionEntry<C>, "slug"> & {
//     slug: string;
//     date: Date;
//   };

// /**
//  * Augment an entry with slug and date properties, parsed from its filepath.
//  */
// export async function augmentEntry<C extends keyof AnyEntryMap>(
//   entry: CollectionEntry<C>,
// ): Promise<CollectionEntryAug<C>> {
//   let { slug, date } = await parseFilepath(entry.id);

//   return {
//     ...entry,

//     // || to allow for file-based metadata being overriden in frontmatter
//     slug: entry.data.slug || slug,
//     date: entry.data.date || date,
//   };
// }

// export async function getCollectionAug<C extends keyof AnyEntryMap>(
//   collection: C,
// ): Promise<CollectionEntryAug<C>[]> {
//   let entries = await getCollection(collection);
//   let augmentedEntries = await Promise.all(entries.map(augmentEntry));

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
