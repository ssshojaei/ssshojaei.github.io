import { POSTS_PATH } from '@/utils/mdxUtils'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH)
}

type PostItems = {
  [key: string]: string | false
}

export function getPostBySlug(
  slug: string,
  fields: string[] = []
): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: PostItems = {}

  if (!data.show) {
    return {
      show: false
    }
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []): PostItems[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .filter(post => post?.show !== false)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getPostsByCategory(
  fields: string[] = [],
  category: string
): PostItems[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .filter(post => post?.show !== false)
    .filter(post =>
      (post.tags as unknown as string[]).includes(category)
    )
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
