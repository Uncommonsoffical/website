'use client'

import { useContextModel, useModelState } from '@orch/react'

import { BlogListModel } from '@/modules/blog/model'

export function useBlogs() {
  const model = useContextModel(BlogListModel)
  return useModelState(model, ({ blogs }) => blogs, [])
}
