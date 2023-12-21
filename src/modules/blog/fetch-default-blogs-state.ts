import "server-only";

import { BlogListConfig, BlogListModel } from "@/modules/blog/model";

export async function fetchDefaultBlogsState(config: BlogListConfig) {
    const model = new BlogListModel(null, config);

    await model.fetchBlogs();

    return model.getState();
}
