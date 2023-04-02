import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import React from 'react'

const ContactPage = () => {
  const [status, setStatus] = React.useState<
    'unsent' | 'loading' | 'success' | 'failed'
  >('unsent')

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setStatus('loading')
    const formData = new FormData((e as any).target)

    formData.append(
      'access_key',
      'fd61653d-f9ed-4238-9155-a5a8474f2093'
    )

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    }).then(res => res.json())

    if (res.success) {
      setStatus('success')
    } else {
      setStatus('failed')
    }
  }
  return (
    <>
      <Head>
        <title>ارتباط با من | سید صالح شجاعی</title>
        <meta
          name="description"
          content="خوشحال میشم با هم گفت‌وگو کنیم، پیام‌هاتون رو برام بفرستید"
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
            <form
              id="form"
              onSubmit={handleSubmit}
              //   action="https://api.web3forms.com/submit"
              //   method="POST"
              className="w-full max-w-lg mx-auto">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                    htmlFor="name">
                    نام
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 border border-gray-200 dark:border-gray-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:text-gray-300"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                    htmlFor="email">
                    ایمیل
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 border border-gray-200 dark:border-gray-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:text-gray-300"
                    id="email"
                    name="email"
                    dir="ltr"
                    type="email"
                    placeholder="name@compony.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
                    htmlFor="message">
                    متن پیام
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 border border-gray-200 dark:border-gray-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:text-gray-300"
                    id="message"
                    name="message"
                    placeholder="پیام خود را وارد کنید"
                    rows={8}
                    required
                  />
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-xs italic">
                    تلاش میکنم به سرعت بهتون پاسخ بدم، ممنونم که این
                    رو مینویسید برام
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-7 mb-7">
                <button
                  disabled={
                    status === 'loading' || status === 'success'
                  }
                  type="submit"
                  className="px-5 py-2 disabled:bg-slate-600 dark:disabled:bg-slate-500 disabled:cursor-not-allowed text-sm bg-blue-600 rounded-full dark:bg-blue-900 text-white">
                  ارسال
                </button>
              </div>
              {status === 'success' && (
                <div className="text-green-600 dark:text-green-300 text-sm text-center">
                  پیام شما با موفقیت ارسال شد
                </div>
              )}
            </form>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default ContactPage
