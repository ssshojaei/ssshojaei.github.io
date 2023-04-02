import { TCategory } from '@/constants/CategoriesList'
import { myLoader } from '@/utils'
import Image from 'next/image'

export type TCategoryBannerProps = {
  category: TCategory
  title: string
  subtitle: string
}

const CategoryBanner = ({
  category,
  title,
  subtitle
}: TCategoryBannerProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        alt={title}
        loader={myLoader}
        width={640}
        height={374}
        src={`/categories/${category}.jpg`}
        decoding="async"
        className="transition-all object-cover rounded-lg"
      />
      <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
        {title}
      </h1>
      <p className="text-base font-semibold text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>
    </div>
  )
}

export default CategoryBanner
