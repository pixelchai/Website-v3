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
import type { IconId } from "@/components/Icon.astro";

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

  return entry.data.links;
}
