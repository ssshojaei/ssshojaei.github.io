import Layout from '@/components/Layout/Layout'
import categoriesList from '@/constants/CategoriesList'
import { myLoader } from '@/utils'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const CategoriesPage = () => {
  return (
    <>
      <Head>
        <title>دسته‌بندی‌های بلاگ | سید صالح شجاعی</title>
        <meta
          name="description"
          content="دسته‌های مختلف نوشته‌های من رو میتونید از اینجا ببینید"
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
            <div className="grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(categoriesList).map(([key, value]) => (
                <div key={key} className="cursor-pointer group">
                  <div className="overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105">
                    <Link
                      className="relative block aspect-square"
                      href={`/categories/${key}`}>
                      <Image
                        alt={value.title}
                        src={`/categories/${key}.jpg`}
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
                      <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                        <Link href={`/categories/${key}`}>
                          <span className="bg-gradient-to-l from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                            {value.title}
                          </span>
                        </Link>
                      </h2>
                      <p className="text-sm text-slate-600 leading-6 tracking-tight mt-2 dark:text-slate-200">
                        {value.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default CategoriesPage
