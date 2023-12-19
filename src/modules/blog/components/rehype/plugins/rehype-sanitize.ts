import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

export { rehypeSanitize };

export const sanitizeSchema: typeof defaultSchema = {
  ...defaultSchema,
  protocols: {
    ...defaultSchema.protocols,
    src: ["http", "https", "ipfs"],
  },
  tagNames: [
    ...(defaultSchema.tagNames || []),
    "video",
    "iframe",
    "at-mention",
  ],
  attributes: {
    ...defaultSchema.attributes,
    div: [...(defaultSchema.attributes?.div || []), ["className"]],
    code: [["className"]],
    video: [
      ["className"],
      ["src"],
      ["controls"],
      ["loop"],
      ["muted"],
      ["playsinline"],
    ],
    iframe: [
      ["className"],
      ["src"],
      ["allowfullscreen"],
      ["frameborder"],
      ["width"],
      ["height"],
      ["allow"],
    ],
    "at-mention": [["handle"]],
  },
};
