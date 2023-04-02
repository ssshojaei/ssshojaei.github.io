/* eslint-disable @next/next/no-img-element */
import { myLoader } from '@/utils'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Author from '../Author/Author'

const AboutMe = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    renderMode: 'performance'
  })

  return (
    <div className="grid">
      <div className="group grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105">
          <div className="relative block aspect-video cursor-move">
            <div ref={ref} className="keen-slider">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <div className="keen-slider__slide" key={index}>
                    <Image
                      alt="صالح شجاعی"
                      loader={myLoader}
                      width={640}
                      height={374}
                      src={`/img/about_me/${index + 1}.jpg`}
                      decoding="async"
                      className="transition-all object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <div className="flex flex-col gap-3">
            <span className="text-sm text-neutral-500">
              درود زیبا، چگونه‌ای؟
            </span>
            <div className="inline-flex gap-2 lg:text-4xl text-2xl font-medium text-blue-600 dark:text-blue-500">
              <span className="font-light">من</span>
              <strong className="font-black">صالح</strong>{' '}
              <span className="font-light">هستم</span>
            </div>
          </div>
          <p className="text-gl font-light leading-loose tracking-tight md:mt-2 dark:text-white">
            <span className="bg-gradient-to-l from-blue-200 to-blue-100 dark:from-blue-800 dark:to-blue-900 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              یه روز گرم تابستونی توی سال ۹۱ توی سن ۱۳ سالگی فهمیدم
              برنامه‌نویس هستم چون یه{' '}
              <a
                className="font-semibold text-blue-600 dark:text-sky-100"
                href="https://profile.iwmf.ir/organizations/oxygenplay.ir"
                target="_blank"
                rel="noreferrer">
                مارکت اندروید
              </a>{' '}
              با کلی آدم مشتاق روش درست کردم و از پروژه گرفتن پول در
              میارم. آره، این نقطه‌ای برای شروع داستان منه
            </span>
          </p>
          <Author />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
