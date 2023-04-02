import categoriesList, { TCategory } from '@/constants/CategoriesList'
import { myLoader } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import Author from '../Author/Author'

type TBlogItemProps = {
  title: string
  slug: string
  date: string
  image: string
  tags: string[]
}

const BlogItem = ({
  title,
  date,
  slug,
  image,
  tags
}: TBlogItemProps) => {
  return (
    <div className="cursor-pointer group">
      <div className="overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105">
        <Link
          className="relative block aspect-square"
          href={`/posts/${slug}`}>
          <Image
            alt={title}
            src={image}
            decoding="async"
            className="transition-all object-cover"
            loading="lazy"
            loader={myLoader}
            fill
          />
        </Link>
      </div>
      <div>
        <div>
          <div className="flex gap-3">
            {tags?.map(category => (
              <Link
                key={`category-${category}`}
                href={`/categories/${category}`}>
                <span className="inline-block text-xs font-medium tracking-wider mt-5 text-blue-600 dark:text-blue-300">
                  {categoriesList[category as TCategory].title}
                </span>
              </Link>
            ))}
          </div>
          <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white text-gray-700">
            <Link href={`/posts/${slug}`}>
              <span className="bg-gradient-to-l from-blue-300 to-blue-200 dark:from-blue-800 dark:to-blue-900 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                {title}
              </span>
            </Link>
          </h2>
          <div className="mt-3">
            <Author date={date} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
