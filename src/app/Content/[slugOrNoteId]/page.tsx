import { indexer } from "@crossbell/indexer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Balancer from "react-wrap-balancer";

import { Markdown } from "@/modules/blog/components/rehype/markdown";
import { getImages } from "@/modules/blog/utils";
import { getMarkdownSummary } from "@/utils/get-markdown-summary";
import { fetchNoteBySlug } from "@/utils/graphql";
import { ipfsLinkToHttpLink } from "@/utils/ipfs";

async function fetchNote(slugOrNoteId: string) {
    return (
        (await fetchNoteBySlug({ characterId: 60202, slug: slugOrNoteId })) ??
        (await indexer.note.get(60202, slugOrNoteId))
    );
}

export async function generateMetadata({
    params,
}: {
    params: { slugOrNoteId: string };
}): Promise<Metadata> {
    const note = await fetchNote(params.slugOrNoteId);
    const [image] = getImages(note);
    const content = note?.metadata?.content;
    const title = content?.title ?? "Blog of Uncommons";
    const description = content?.content
        ? await getMarkdownSummary(content.content)
        : "";
    const images = image?.url ? [ipfsLinkToHttpLink(image.url)] : "/logo.png";

    return {
        title,
        description,
        openGraph: { title, description, images },
    };
}

export const revalidate = 30;

export default async function Page({
    params,
}: {
    params: { slugOrNoteId: string };
}) {
    const note = await fetchNote(params.slugOrNoteId);
    const content = note?.metadata?.content;
    const title = content?.title;
    const tagStr =
        content?.tags
            ?.filter((tag) => !["post", "page"].includes(tag))
            .map((tag) => `#${tag}`)
            .join(" ") ?? "";

    if (!note) {
        notFound();
    }

    return (
        <div>
            <h1 className="my-24 text-3xl font-light lg:mb-16 lg:text-5xl text-center">
                <Balancer>{title}</Balancer>
            </h1>

            <Markdown content={note?.metadata?.content?.content ?? ""} />

            <div
                className="mt-11 text-right font-ocr-b-std opacity-50 lg:mt-20"
                title={tagStr}
            >
                {tagStr}
            </div>
        </div>
    );
}
