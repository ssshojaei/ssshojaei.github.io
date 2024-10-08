import BlogContainer from '@/components/Blog/BlogContainer'
import CategoryBanner, {
  TCategoryBannerProps
} from '@/components/CategoryBanner/CategoryBanner'
import Layout from '@/components/Layout/Layout'
import categoriesList, { TCategory } from '@/constants/CategoriesList'
import { getAllPosts, getPostsByCategory } from '@/lib/api'
import { PostType } from '@/types/post'
import Head from 'next/head'

type IndexProps = {
  posts: PostType[]
  category: TCategoryBannerProps
}

const CategoriesPage = ({ posts, category }: IndexProps) => {
  return (
    <>
      <Head>
        <title>
          نوشته‌ها در دسته‌بندی {category?.title} | سید صالح شجاعی
        </title>
        <meta
          name="description"
          content={`${category?.subtitle} | صالح شجاعی`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <main>
        <Layout>
          <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
            <CategoryBanner {...category} />
            <BlogContainer posts={posts} />
          </div>
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
  const posts = getPostsByCategory(
    ['date', 'description', 'slug', 'title', 'coverImage', 'tags'],
    params.slug
  )

  return {
    props: {
      posts,
      category: {
        category: params.slug,
        ...categoriesList[params.slug as TCategory]
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['tags'])

  const categories = posts
    .map(post => `/categories/${post.tags}`)
    .flat()

  return {
    paths: categories,
    fallback: false
  }
}

export default CategoriesPage
