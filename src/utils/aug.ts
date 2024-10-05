import type { AnyEntryMap, CollectionEntry } from "astro:content";
import path from "path";

export async function parseFilepath(filepath: string): Promise<{
  slug: string;
  date: Date;
}> {
  /**
   * Extract slug and date from the provided filepath,
   * mimicing behaviour from Jekyll (https://jekyllrb.com/docs/posts/#creating-posts).
   */
  let baseName = path.basename(filepath, path.extname(filepath));
  let parts = baseName.split("-");
  let date = new Date(parts.slice(0, 3).join("-"));
  let slug = parts.slice(3).join("-");
  return { slug, date };
}

export async function augmentEntry<C extends keyof AnyEntryMap>(
  entry: CollectionEntry<C>,
): Promise<
  // the type of 'slug' is relaxed to be any string
  Omit<CollectionEntry<C>, "slug"> & {
    slug: string;
    date: Date;
  }
> {
  /**
   * Augment an entry with additional properties.
   */
  let { slug, date } = await parseFilepath(entry.id);

  return {
    ...entry,
    slug,
    date,
  };
}

// export async function getCollectionAug()
