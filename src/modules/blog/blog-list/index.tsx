import React from "react";

import type { BlogListState } from "../model";
import { Blog } from "./blog";

export function BlogList({
    blogs,
    titleClassName,
    infoClassName,
}: {
    blogs: BlogListState["blogs"];
    compact?: boolean;
    titleClassName: string;
    infoClassName: string;
}) {
    return (
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {blogs.map((note) => (
                <Blog
                    titleClassName={titleClassName}
                    infoClassName={infoClassName}
                    note={note}
                    key={note.noteId}
                />
            ))}
        </div>
    );
}
