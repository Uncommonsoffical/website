"use client";

import { useContextModel, useModelState } from "@orch/react";
import clsx from "clsx";
import React from "react";

import { Btn } from "../components/btn";

import { BlogListModel } from "../model";

export function LoadMoreBtn({ className }: { className?: string }) {
    const model = useContextModel(BlogListModel);
    const [hasNext, isFetching] = useModelState(
        model,
        (state) => [state.hasNext, state.isFetching],
        []
    );

    return (
        <Btn
            noArrow={true}
            disabled={isFetching}
            className={clsx(
                "cursor-pointer border text-black hover:border-current",
                !hasNext && "hidden",
                isFetching && "opacity-50",
                className
            )}
            onClick={model.fetchBlogs}
        >
            {isFetching ? "Loading" : "Load More"}
        </Btn>
    );
}
