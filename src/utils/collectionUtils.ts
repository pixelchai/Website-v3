import type { GetStaticPathsResult } from "astro";
import {
  getCollection,
  type AnyEntryMap,
  type CollectionEntry,
  type ContentEntryMap,
} from "astro:content";
import YouTube from "@/components/YouTube.astro";
import Img from "@/components/markdown/Img.astro";
import Image from "@/components/img/Image.astro";
import { Code, Debug } from "astro:components";
import {
  iconData,
  shortHandMap,
  type IconId,
  type ShortHandEntry,
} from "@/components/Icon.astro";

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

export function getContentComponents() {
  return {
    img: Img,
    Img,
    Image,

    Code,
    Debug,

    YouTube,
  };
}

// frontmatter links may be incomplete or shorthand versions
// but they will be completed by the function below
// the completed link types is defined:
export type CompleteLink = {
  title: string;

  // Theoretically, providing no URL could be useful in cases such as
  // e.g. supported game platforms (but no URL is available)
  // but doesn't make sense to allow it when this usage is not needed currently
  // if it is needed, this should be updated and handled throughout the project
  // properly as needed.
  url: string;

  // up to implementing components to decide how to handle no icon
  // (because behaviour may possibly be different depending on the context)
  icon?: IconId;
};

export function getEntryLinks(entry: any): CompleteLink[] {
  let ret: CompleteLink[] = [];
  if (!entry.data.links) {
    return ret;
  }

  const links = entry.data.links;
  for (let link of links) {
    if (link.title) {
      // further validation
      if (!link.url) {
        console.error(`Link title: ${link.title} has no URL`);
        continue;
      }

      if (link.icon && !(link.icon in iconData)) {
        console.error(
          `Link title: ${link.title} has invalid icon: ${link.icon}`,
        );
        continue;
      }

      ret.push(link);
    } else {
      const linkEntries = Object.entries(link);
      if (linkEntries.length !== 1) {
        console.error(
          `Link object: ${JSON.stringify(link)} has invalid format`,
        );
        continue;
      }

      const [shorthand, url] = linkEntries[0] as [IconId, string];
      if (!(shorthand in shortHandMap)) {
        console.error(`Could not find icon name for icon ID: ${shorthand}`);
        continue;
      }

      const { title, icon } = shortHandMap[shorthand];

      if (!url) {
        console.error(`Link title: ${title} has no URL`);
        continue;
      }

      ret.push({
        title,
        url,
        icon,
      });
    }
  }

  return ret;
}
