import { PostType } from '@/types/post'
import BlogItem from './BlogItem'

type TBlogContainerProps = {
  posts: PostType[]
}

const BlogContainer = ({ posts }: TBlogContainerProps) => (
  <div className="grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
    {posts.map((post, index) => (
      <BlogItem
        title={post.title}
        date={post.date}
        slug={post.slug}
        image={post.coverImage}
        tags={post.tags}
        key={index}
      />
    ))}
  </div>
)

export default BlogContainer
