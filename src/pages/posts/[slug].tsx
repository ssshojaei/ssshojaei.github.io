import BlogPost from '@/components/Blog/BlogPost'
import Layout from '@/components/Layout/Layout'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import { PostType } from '@/types/post'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import { readingTime } from 'reading-time-estimator'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

type Props = {
  post: PostType
}

const BlogPostPage = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>{post.title} | سید صالح شجاعی</title>
        <meta
          name="description"
          content={`${post.description} | بلاگ صالح شجاعی`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <BlogPost post={post} />
        </Layout>
      </main>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'date',
    'slug',
    'author',
    'tags',
    'content',
    'ogImage',
    'coverImage'
  ])

  const content = await serialize(post.content || '', {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] }
          },
          { behaviour: 'wrap' }
        ],
        rehypeHighlight,
        rehypeCodeTitles
      ]
    }
  })
  const timeToRead = readingTime(post.content || '', 10)

  return {
    props: {
      post: {
        ...post,
        content,
        timeToRead: timeToRead.minutes
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

export default BlogPostPage
