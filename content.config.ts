import { defineCollection, defineContentConfig, z } from "@nuxt/content";
// import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      // asSitemapCollection({
      type: "page",
      source: "**/*.md",
      slug: (path) => path.replace("/articles/", "").replace(".md", ""),
      schema: z.object({
        links: z
          .array(
            z.object({
              label: z.string(),
              icon: z.string(),
              to: z.string(),
              target: z.string().optional(),
            }),
          )
          .optional(),
      }),
      // }),
    }),
  },
});
