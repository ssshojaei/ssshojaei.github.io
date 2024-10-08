import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

import { myLoader } from '@/utils'
import LogoWhite from '../../../public/img/logo-white.svg'
import Logo from '../../../public/img/logo.svg'

const primaryMenu = [
  {
    label: 'خانه',
    href: '/',
    external: false
  },
  {
    label: 'دسته‌بندی',
    href: '/categories',
    external: false
  },
  {
    label: 'تماس',
    href: '/contact',
    external: false
  }
]

const secondaryMenu = [
  {
    label: 'مشاوره رزومه',
    href: '/meeting',
    external: false
  },
  {
    label: 'لینکدین',
    href: 'https://www.linkedin.com/in/ordinarysaleh/',
    external: true
  },
  {
    label: 'گیت‌هاب',
    href: 'https://github.com/ssshojaei',
    external: true
  }
]

const mobilemenu = [...primaryMenu, ...secondaryMenu]

const Header = () => {
  return (
    <header className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {primaryMenu.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex justify-between flex-row-reverse w-full md:w-auto">
                  <Link href="/" className="w-28 dark:hidden">
                    <Image loader={myLoader} src={Logo} alt="logo" />
                  </Link>
                  <Link href="/" className="hidden w-28 dark:block">
                    <Image
                      loader={myLoader}
                      src={LogoWhite}
                      alt="logo"
                    />
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 ">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
                  {secondaryMenu.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      target={item?.external ? '_blank' : '_self'}
                      className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      target={item?.external ? '_blank' : '_self'}
                      className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </header>
  )
}

export default Header
