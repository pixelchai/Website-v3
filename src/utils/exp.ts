type allowedSlugs = "2024-monogame-pong" | "2013-blong";

type Post = {
  slug: allowedSlugs;
  title: string;
};

function relaxSlug(obj: Post): Omit<Post, "slug"> & { slug: string } {
  let newSlug = "hello";
  return { ...obj, slug: newSlug };
}
