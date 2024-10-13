import Layout from '@/components/Layout/Layout'
import { animate, motion, useMotionValue } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import useMeasure from 'react-use-measure'

const logos: string[] = Array.from(
  { length: 60 },
  (_, index) => `/meeting-images/logo${index + 1}.webp`
)

const ImagesSlider = () => {
  const FAST_DURATION = 65
  const SLOW_DURATION = 155

  const [duration, setDuration] = React.useState(FAST_DURATION)
  const [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  const [mustFinish, setMustFinish] = React.useState(false)
  const [rerender, setRerender] = React.useState(false)

  React.useEffect(() => {
    let controls
    const finalPosition = -width / 2 - 8

    if (mustFinish) {
      controls = animate(
        xTranslation,
        [xTranslation.get(), finalPosition],
        {
          ease: 'linear',
          duration:
            duration * (1 - xTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false)
            setRerender(!rerender)
          }
        }
      )
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0
      })
    }

    return controls?.stop
  }, [rerender, xTranslation, duration, width, mustFinish])

  return (
    <main className="py-8 relative max-w-full min-h-40 md:h-auto overflow-hidden">
      <motion.div
        className="absolute left-0 flex gap-4"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(SLOW_DURATION)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(FAST_DURATION)
        }}
        // Adding touch events for mobile devices
        onTouchStart={() => {
          setMustFinish(true)
          setDuration(SLOW_DURATION)
        }}
        onTouchEnd={() => {
          setMustFinish(true)
          setDuration(FAST_DURATION)
        }}>
        {[...logos, ...logos].map((item, idx) => (
          <div
            key={idx}
            className="w-auto h-40 min-w-[20rem] sm:min-w-[24rem] sm:h-36 md:min-w-[28rem] md:h-40 lg:h-32">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </main>
  )
}

const MeetingPage = () => {
  return (
    <>
      <Head>
        <title>
          جلسه‌ی مشاوره برای نوشتن رزومه‌ی برنامه‌نویسی | سید صالح
          شجاعی
        </title>
        <meta
          name="description"
          content="راهنمایی بهبود و نوشتن رزومه‌ی برنامه نویسی"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <main>
        <Layout>
          <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
            <div className="mb-5 md:mb-24">
              <ImagesSlider />
            </div>
            <div className="w-full max-w-lg mx-auto">
              <h1 className="text-xl font-semibold mt-12 mb-6">
                مشاوره‌ی نوشتن و بهبود رزومه‌ی تخصصی
              </h1>
              <div className="flex flex-col gap-3 text-balance leading-8">
                <p>
                  در طول ۱۰ سال گذشته، بارها رزومه‌ام رو برای
                  موقعیت‌های مختلف شغلی نوشتم و به مرور بهبودش دادم.
                  با تحقیق، بازخورد گرفتن از استخدام‌کننده‌ها و تجربه
                  شرکت در فرآیندهای جذب، یاد گرفتم چطور رزومه‌ای بسازم
                  که توجه کارفرماها رو جلب کنه و منجر به دریافت
                  مصاحبه‌های بیشتر بشه. همچنین با بررسی صدها رزومه در
                  تیم‌های مختلف استخدام، با مشکلات رایج و اشتباهات
                  افراد آشنا شدم. این تجربه بهم دید خوبی داده تا بدونم
                  چه تغییرات کوچکی می‌تونه رزومه رو بهینه کنه و شانس
                  موفقیتش رو افزایش بده.
                </p>
                <p>
                  اگه رزومه‌ات بارها رد میشه و فکر می‌کنی بازخوردی که
                  می‌گیری کمتر از چیزی هست که شایستگی‌اش رو داری، من
                  اینجام تا کمک کنم. توی جلسات مشاوره خصوصی، با هم روی
                  رزومه‌ات کار می‌کنیم تا بتونی مهارت‌ها و تجربه‌هات
                  رو به بهترین شکل نشون بدی.
                </p>
                <ul className="list-disc list-inside">
                  <li>بررسی و بازبینی کامل رزومه</li>
                  <li>ایده‌هایی برای بهبود ساختار و محتوای رزومه</li>
                  <li>نمایش بهتر پروژه‌ها و توانایی‌هات</li>
                  <li>
                    مشاوره درباره کلمات کلیدی که سیستم‌های ATS بیشتر
                    می‌پسندن
                  </li>
                  <li>راهنمایی برای اپلای به شرکت‌های معتبر</li>
                  <p>
                    اگه آماده‌ای که رزومه‌ات رو به سطح بالاتری ببری و
                    شانست برای مصاحبه‌ها رو بیشتر کنی، همین حالا یه
                    جلسه رزرو کن!
                  </p>
                </ul>
                <p>
                  <strong>تخفیف ویژه: </strong> اولین جلسه مشاوره برای
                  مدت محدودی با تخفیف ارائه میشه.
                </p>
              </div>
              <div className="flex justify-center my-10">
                <a
                  href="https://zarinp.al/636537"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-block group">
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 dark:from-blue-700 dark:to-indigo-900 text-2xl font-extrabold tracking-tight transition-all duration-500 ease-in-out group-hover:opacity-0">
                    رزرو جلسه مشاوره
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400 dark:from-indigo-900 dark:to-blue-700 text-2xl font-extrabold tracking-tight transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    رزرو جلسه مشاوره
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default MeetingPage
