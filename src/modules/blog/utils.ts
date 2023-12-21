import type { NoteEntity } from "crossbell";
import compact from "lodash.compact";
import React from "react";

type ImageInfo = {
    url: string;
    alt?: string;
    isCover: boolean;
};

export function getImages(note: NoteEntity | null): (ImageInfo | undefined)[] {
    try {
        const content = note?.metadata?.content;
        const cover = content?.attachments?.find(
            (attachment) => attachment.name === "cover"
        );

        return cover?.address
            ? [{ url: cover.address, alt: cover.alt, isCover: true }]
            : extractImages(content?.content ?? "");
    } catch (e) {
        console.error(e);
        return [];
    }
}

export function useImages(note: NoteEntity | null) {
    return React.useMemo(() => getImages(note), [note]);
}

function extractImages(markdownText: string): ImageInfo[] {
    const regex = /!\[(.*?)\]\((.*?)\)/g;
    const matches = Array.from(markdownText.matchAll(regex));

    return compact(
        matches.map((match) => {
            const url = match[2]?.split(" ")[0];
            const alt = match[1] ?? "";

            return url ? { url, alt, isCover: false } : null;
        })
    );
}

export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function getBlogUrl(note: NoteEntity) {
    const slug = note.metadata?.content?.attributes?.find(
        ({ trait_type }) => trait_type === "xlog_slug"
    )?.value;

    return `/Content/${encodeURIComponent(slug ?? note.noteId)}`;
}
