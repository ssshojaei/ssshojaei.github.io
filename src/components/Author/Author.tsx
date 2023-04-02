import { myLoader } from '@/utils'
import moment from 'jalali-moment'
import Image from 'next/image'

type TAuthorProps = {
  date?: string
}

const Author = ({ date }: TAuthorProps) => {
  return (
    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0 w-5 h-5">
          <Image
            alt="صالح شجاعی"
            src="/img/profile.jpg"
            decoding="async"
            className="rounded-full object-cover"
            loading="lazy"
            width={20}
            height={20}
            loader={myLoader}
          />
        </div>
        <span className="text-sm">صالح شجاعی</span>
      </div>
      {!!date && (
        <>
          <span className="text-lg mt-1 text-gray-300 dark:text-gray-600">
            •
          </span>
          <time
            className="text-sm"
            dateTime={new Date(date).toString()}>
            {moment(date).locale('fa').format('YYYY/MM/DD')}
          </time>
        </>
      )}
    </div>
  )
}

export default Author
