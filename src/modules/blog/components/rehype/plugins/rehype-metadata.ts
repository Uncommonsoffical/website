import { Root } from 'rehype-raw'
import { Plugin } from 'unified'
import { parse } from 'yaml'

export type Cover = Partial<{
  url: string
  padding: string
  width: string
  height: string
  scale: string
  useRaw: boolean
}>

export type RehypeMetadataCache = {
  title?: string
  summary?: string
  cover?: Cover
  order?: number
  category?: string
}

export type RehypeMetadataOptions = {
  cache: RehypeMetadataCache
}

export const rehypeMetadata: Plugin<[RehypeMetadataOptions], Root> =
  ({ cache }: RehypeMetadataOptions) =>
  (tree: Root) => {
    const node = tree.children.find(({ type }) => (type as string) === 'yaml')
    const yamlStr = (node as { value?: string })?.value ?? ''

    Object.assign(cache, parse(yamlStr))
  }
