import React from "react";

import { List } from "@/app/Content/list";
import { BlogListContextProvider, LoadMoreBtn } from "@/modules/blog";
import { fetchDefaultBlogsState } from "@/modules/blog/fetch-default-blogs-state";
import { Box } from "@mui/material";

export const revalidate = 60; // revalidate at every minute

export default async function BlogListPage() {
  const defaultState = await fetchDefaultBlogsState({ pageSize: 7 });

  return (
    <Box minHeight={{ xl: "calc(100vh - 180px)" }}>
      <BlogListContextProvider defaultState={defaultState}>
        <div className="lg:pt-8" data-nav-theme="dark">
          <div className="mx-auto mt-8 box-content max-w-[1300px] pb-9 lg:mt-12 lg:px-16 lg:pb-16">
            <div className="px-5 lg:px-0 text-3xl my-10">Our Content</div>
            <List />

            <div className="flex items-center justify-center">
              <LoadMoreBtn className="mt-10 lg:mt-16" />
            </div>
          </div>
        </div>
      </BlogListContextProvider>
    </Box>
  );
}
