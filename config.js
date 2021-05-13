module.exports = {
  pathPrefix: '',
  siteUrl: 'https://roxaleh.ir',
  siteTitle: 'سید صالح شجاعی',
  siteDescription: 'بلاگ شخصی سید صالح شجاعی',
  author: 'سید صالح شجاعی',
  postsForArchivePage: 3,
  defaultLanguage: 'fa',
  keywords: [
    'برنامه نویسی',
    'سید صالح شجاعی',
    'رکساله',
    'roxaleh',
    'جاوااسکریپت',
    'با صالح',
    'ssshojaei',
    'صالح شجاعی',
  ],
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/ssshojaei/',
    telegram: 'https://t.me/roxaleh/',
    twitter: 'https://twitter.com/shojaeisaleh/',
    instagram: 'https://www.instagram.com/roxaleh/',
    linkedin: 'https://www.linkedin.com/in/ordinarysaleh/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
  quotesUrl:
    'https://api-eu-central-1.graphcms.com/v2/ckon9fqxyf7oj01z208apgg9u/master',
  tags: {
    programming: {
      name: 'برنامه نویسی',
      description:
        'نکات و آموزش‌های ساده و پیشرفته درمورد برنامه نویسی، بیشتر هم جاوااسکریپت!',
      color: '#e97878',
    },
    podcast: {
      name: 'پادکست باصالح',
      description:
        'تراوشات ذهن نسبتا بیمار یک صالح، از جامعه و فلسفه گرفته تا راهنمای پیدا کردن شغل خوب و تجربه‌های مختلف',
      color: '#273238',
    },
    society: {
      name: 'جامعه',
      description:
        'یک شهروند خوشحال از جامعه‌ی خوشحالی که در آن می‌زی‌اد مینوی‌سَد',
      color: '#000000',
    },
    work: {
      name: 'کار',
      description:
        'هرچیزی درمورد شغل برنامه‌نویس یا مدیر پروژه بودن و چیزهایی مرتبط به این‌ها',
      color: '#351f39',
    },
    vegan: {
      name: 'گیاه‌خواری',
      description: `شش هزار و چهارصد قرن برای فهمیدن
        خروج از این چرخه بجای پوسیدن`,
      color: '#86cd00',
    },
    linux: {
      name: 'لینوکس',
      description: `ترفندهایی خفن و برنامه‌هایی کاربردی برای گنو/لینوکس زیبا`,
      color: '#ffc764',
    },
    introduce: {
      name: 'معرفی',
      description: `معرفی فیلم و سریال، موزیک و کتاب خوب، آدم‌های جالب یا حتی نرم‌افزارهای کاربردی`,
      color: '#a685e2',
    },
  },
}
