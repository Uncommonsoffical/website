"use client";

import { useLocalModel, withContextModelProvider } from "@orch/react";
import React from "react";

import { BlogListModel, BlogListState } from "./model";

export type BlogListContextProviderProps = {
    defaultState?: BlogListState;
    children: React.ReactNode;
};

export const BlogListContextProvider =
    withContextModelProvider<BlogListContextProviderProps>(
        ({ children }) => <>{children}</>,
        ({ defaultState }) => {
            const model = useLocalModel(BlogListModel, [defaultState]);

            return [model];
        }
    );
