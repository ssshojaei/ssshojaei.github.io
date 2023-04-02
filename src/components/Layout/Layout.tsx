import Footer from './Footer'
import Header from './Header'
import { ILayoutProps } from './types'

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400 flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
