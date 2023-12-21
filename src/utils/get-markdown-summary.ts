import "server-only";

import markdownParse from "remark-parse";
import stringify from "remark-stringify";
import strip from "strip-markdown";
import { unified } from "unified";

export async function getMarkdownSummary(markdown: string, length = 250) {
    const md = await unified()
        .use(markdownParse)
        .use(stringify)
        .use(strip)
        .process(markdown);

    return md.toString().slice(0, length);
}
