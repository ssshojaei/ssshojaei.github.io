import Author from '@/components/Author/Author'
import categoriesList, { TCategory } from '@/constants/CategoriesList'
import { PostType } from '@/types/post'
import { myLoader } from '@/utils'
import { DiscussionEmbed } from 'disqus-react'
import moment from 'jalali-moment'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import Link from 'next/link'
import styles from './blog.styles.module.scss'

type TBlogPostProps = {
  post: PostType
}

const DisqusComments = ({ post }: TBlogPostProps) => {
  const disqusShortname = 'roxaleh'
  const disqusConfig = {
    url: `https://roxaleh.ir/posts/${post.slug}`,
    identifier: post.slug,
    title: post.title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

const BlogPost = ({ post }: TBlogPostProps) => {
  const date = moment(post.date).locale('fa').format('YYYY/MM/DD')

  return (
    <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <div className="max-w-screen-md mx-auto ">
          <div className="flex justify-center">
            <div className="flex gap-3">
              {post?.tags?.map(category => (
                <Link
                  key={`category-${category}`}
                  href={`/categories/${category}`}>
                  <span className="inline-block text-xs font-medium tracking-wider mt-5 text-blue-700">
                    {categoriesList[category as TCategory].title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            {post.title}
          </h1>
          <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <Author />
              <div className="flex items-center space-x-2 text-sm">
                <time
                  className="text-gray-500 dark:text-gray-400"
                  dateTime={new Date(post.date).toString()}>
                  {date}
                </time>
                <span>· {post.timeToRead} دقیقه برای خواندن</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
        <Image
          src={post.coverImage}
          alt={post.title}
          loader={myLoader}
          className="object-cover"
          loading="eager"
          decoding="async"
          fill
        />
      </div>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
        <article className={styles['article']}>
          <div className="dark:dark-theme">
            <MDXRemote
              {...post.content}
              components={{
                Author
              }}
            />
          </div>
          <div>
            <DisqusComments post={post} />
          </div>
          <div className="flex justify-center mt-7 mb-7">
            <Link
              className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-slate-50 dark:bg-slate-900"
              href="/">
              بازگشت ←
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost
