import Container from './Container'
import ThemeSwitch from './ThemeSwitch'

const Footer = () => {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <ThemeSwitch />

      <div dir="ltr" className="text-sm text-center">
        Copyright © 2019 - {new Date().getFullYear()} | Saleh Shojaei.
        All rights reserved.
      </div>
    </Container>
  )
}

export default Footer
