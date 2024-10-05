import path from "path";

export default function parseFilepath(filepath: string): {
  slug: string;
  date: Date;
} {
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
