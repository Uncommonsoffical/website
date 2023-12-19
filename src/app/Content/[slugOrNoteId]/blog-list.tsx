'use client'

import { useContextModel, useModelState } from '@orch/react'
import React from 'react'

import { Blog } from '@/modules/blog/blog-list/blog'
import { BlogListModel } from '@/modules/blog/model'

export function BlogList() {
  const model = useContextModel(BlogListModel)
  const { blogs } = useModelState(model)

  return (
    <div className='mx-auto mb-11 box-content max-w-[1300px] lg:mb-14 lg:mt-16 lg:px-16'>
      <div className='lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12'>
        {blogs.slice(0, 3).map((note) => (
          <Blog note={note} key={note.noteId} infoClassName='text-black/60' titleClassName='text-black' />
        ))}
      </div>
    </div>
  )
}
