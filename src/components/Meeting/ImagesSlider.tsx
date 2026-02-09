import { animate, motion, useMotionValue } from 'framer-motion'
import React from 'react'
import useMeasure from 'react-use-measure'

export const logos: string[] = Array.from(
  { length: 60 },
  (_, index) => `/meeting-images/logo${index + 1}.webp`
)

export const ImagesSlider = () => {
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
