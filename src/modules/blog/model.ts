import type { indexer } from "@crossbell/indexer";
import { autoActivate, OrchModel } from "@orch/core";
import type { NoteEntity } from "crossbell";

export type BlogEntity = NoteEntity & { summary?: string };

export type BlogListState = {
    cursor: string | null;
    hasNext: boolean;
    blogs: BlogEntity[];
    isFetching: boolean;
};

export type BlogListConfig = {
    pageSize: number;
};

class _BlogListModel extends OrchModel<BlogListState> {
    constructor(
        defaultState?: BlogListState | null,
        private readonly config: BlogListConfig = { pageSize: 6 }
    ) {
        super(
            defaultState ?? {
                blogs: [],
                cursor: null,
                hasNext: true,
                isFetching: false,
            }
        );
    }

    fetchBlogs = async () => {
        const state = this.getState();

        if (!state.hasNext || state.isFetching) return;

        this.setState({ ...state, isFetching: true });

        const { cursor, list } = await fetchNotes({
            characterId: 60202,
            cursor: state.cursor ?? undefined,
            limit: this.config.pageSize,
            orderBy: "publishedAt",
        });

        this.setState({
            cursor,
            blogs: [...state.blogs, ...list],
            hasNext: !!cursor,
            isFetching: false,
        });
    };
}

function fetchNotes({
    cursor,
    characterId,
    limit,
    orderBy,
}: {
    characterId: number;
    cursor?: string;
    limit: number;
    orderBy: "publishedAt";
}): ReturnType<typeof indexer.note.getMany> {
    const url = new URL("https://indexer.crossbell.io/v1/notes");

    url.searchParams.set("characterId", `${characterId}`);
    url.searchParams.set("limit", `${limit}`);
    url.searchParams.set("orderBy", orderBy);

    if (cursor) {
        url.searchParams.set("cursor", cursor);
    }

    return fetch(url).then((res) => res.json());
}

export const BlogListModel = autoActivate()(_BlogListModel);
