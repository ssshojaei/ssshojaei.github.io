import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
