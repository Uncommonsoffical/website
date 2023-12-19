import Link from "next/link";
import React from "react";

import { BlogListContextProvider } from "@/modules/blog";
import { fetchDefaultBlogsState } from "@/modules/blog/fetch-default-blogs-state";
import { Btn } from "@/modules/blog/components/btn";

import { BlogList } from "./blog-list";

export default async function CaseStudyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const defaultBlogsState = await fetchDefaultBlogsState({ pageSize: 3 });

    return (
        <BlogListContextProvider defaultState={defaultBlogsState}>
            <div className="text-black" data-nav-theme="light">
                <div className="mx-auto mb-11 mt-6 box-content max-w-[1300px] px-5 lg:mb-20 lg:px-16">
                    {children}
                </div>

                <hr className="half-line bg-index-mid-grey/50" />

                <div className="mx-auto box-content max-w-[1300px] lg:px-16">
                    <div className="flex h-16 items-center justify-between px-5 lg:h-[105px] lg:px-0">
                        <div className="text-lg font-light text-black lg:text-4xl">
                            Uncommons Blog
                        </div>

                        <Link href="/Content">
                            <Btn className="cursor-pointer border text-black hover:border-current hover:text-black">
                                See All{" "}
                                <span className="hidden lg:inline">
                                    blog posts
                                </span>
                            </Btn>
                        </Link>
                    </div>
                </div>

                <hr className="half-line mb-6 bg-index-mid-grey/50 lg:mb-10" />

                <BlogList />
            </div>
        </BlogListContextProvider>
    );
}
