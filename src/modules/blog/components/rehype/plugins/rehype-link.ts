import rehypeExternalLinks, { Options } from "rehype-external-links";
import { Plugin } from "unified";
import { Root } from "rehype-raw";

export type RehypeLinkCache = {
  links: string[];
};

export type RehypeLinkOptions = Options & { cache: RehypeLinkCache };

export const rehypeLink: Plugin<[RehypeLinkOptions], Root> = function (
  options: RehypeLinkOptions,
) {
  return rehypeExternalLinks.bind(this)({
    ...options,
    target: (node) => {
      const href = node.properties?.href;

      if (typeof href === "string") {
        options.cache.links.push(href);
      }

      return "_blank";
    },
    rel: ["noopener", "noreferrer"],
  });
};
