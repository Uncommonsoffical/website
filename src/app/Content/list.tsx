'use client'

import { BlogList, useBlogs } from '@/modules/blog'

export function List() {
  const blogs = useBlogs()

  return <BlogList infoClassName='text-black/60' titleClassName='text-black' blogs={blogs} />
}
