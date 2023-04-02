export type TCategory =
  | 'society'
  | 'vegan'
  | 'linux'
  | 'introduce'
  | 'programming'
  | 'work'

export type TCategoryList = {
  [key in TCategory]: {
    title: string
    subtitle: string
  }
}

const categoriesList: TCategoryList = {
  society: {
    title: 'جامعه',
    subtitle:
      'یک شهروند خوشحال از جامعه‌ی خوشحالی که در آن می‌زی‌اد مینوی‌سَد'
  },
  vegan: {
    title: 'گیاه‌خواری',
    subtitle:
      'شش هزار و چهارصد قرن برای فهمیدن خروج از این چرخه بجای پوسیدن'
  },
  linux: {
    title: 'لینوکس',
    subtitle:
      'ترفندهایی خفن و برنامه‌هایی کاربردی برای گنو/لینوکس زیبا'
  },
  introduce: {
    title: 'معرفی',
    subtitle:
      'معرفی فیلم و سریال، موزیک و کتاب خوب، آدم‌های جالب یا حتی نرم‌افزارهای کاربردی'
  },
  programming: {
    title: 'برنامه نویسی',
    subtitle:
      'نکات و آموزش‌های ساده و پیشرفته درمورد برنامه نویسی، بیشتر هم جاوااسکریپت!'
  },
  work: { title: 'کار', subtitle: 'هرچیزی درمورد کار و محیط کاری' }
}

export default categoriesList
