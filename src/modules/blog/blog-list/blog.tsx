import clsx from "clsx";
import type { NoteEntity } from "crossbell";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { formatDate, getBlogUrl, useImages } from "@/modules/blog/utils";
import { ipfsLinkToHttpLink } from "@/utils/ipfs";

import fallbackImg from "./blog-fallback.png";

export function Blog({
    note,
    className,
    titleClassName,
    infoClassName,
}: {
    note: NoteEntity;
    className?: string;
    titleClassName: string;
    infoClassName: string;
}) {
    const content = note.metadata?.content;
    const imgs = useImages(note);
    const cover = imgs[0];
    const coverUrl = ipfsLinkToHttpLink(cover?.url ?? "");
    // 3 tags at most
    const tags = content?.tags
        ?.filter((tag) => !["post", "page"].includes(tag))
        .slice(0, 3);

    if (!content) return null;
    return (
        <div
            className={clsx(
                "mb-11 w-full px-5 last:mb-0 lg:mb-0 lg:flex-1 lg:p-0",
                className
            )}
        >
            <div className="md:grid md:grid-cols-2 md:gap-x-8 lg:block">
                <Link href={getBlogUrl(note)}>
                    <div className="relative aspect-[414/226] overflow-hidden rounded-lg">
                        <Image
                            alt={cover?.alt ?? "Blog Image"}
                            src={coverUrl || fallbackImg}
                            className="object-cover transition duration-500 hover:scale-110"
                            fill={true}
                        />
                    </div>
                </Link>

                <div>
                    <div
                        className={clsx(
                            "flex min-h-[48px] items-center justify-between gap-4 py-4 text-sm",
                            infoClassName
                        )}
                    >
                        <div className="whitespace-nowrap font-ocr-b-std">
                            {formatDate(
                                new Date(
                                    content.date_published ?? note.publishedAt
                                )
                            )}
                        </div>
                    </div>
                    <div>
                        <Link href={getBlogUrl(note)}>
                            <h5
                                className={clsx(
                                    "line-clamp-4 font-normal leading-relaxed hover:underline text-xl",
                                    titleClassName
                                )}
                            >
                                {content.title}
                            </h5>
                        </Link>
                        {tags?.map((tag, i) => (
                            <div
                                key={i}
                                className="truncate font-ocr-b-std inline-block bg-indigo-200 rounded-full px-3 py-1 text-gray-700 mr-2 mb-2 my-4"
                            >
                                #{tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
