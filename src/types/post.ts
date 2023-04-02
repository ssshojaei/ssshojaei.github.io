import { MDXRemoteSerializeResult } from 'next-mdx-remote'
export type PostType = {
  title: string
  description: string
  date: string
  coverImage: string
  tags: string[]
  show?: boolean
  slug: string
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >
  timeToRead: number
}
