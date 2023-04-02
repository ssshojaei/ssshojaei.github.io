import AboutMe from '@/components/AboutMe/AboutMe'
import BlogContainer from '@/components/Blog/BlogContainer'
import Layout from '@/components/Layout/Layout'
import { getAllPosts } from '@/lib/api'
import { PostType } from '@/types/post'
import { GetStaticProps } from 'next'
import Head from 'next/head'

type IndexProps = {
  posts: PostType[]
}

const Home = ({ posts }: IndexProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>درباره‌ی من | سید صالح شجاعی</title>
        <meta
          name="description"
          content="بلاگ شخصی صالح شجاعی | توسعه‌دهنده‌ی وب از جلو"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
            <AboutMe />
            <BlogContainer posts={posts} />
          </div>
        </Layout>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'date',
    'description',
    'slug',
    'title',
    'coverImage',
    'tags'
  ])
  return {
    props: { posts }
  }
}

export default Home
