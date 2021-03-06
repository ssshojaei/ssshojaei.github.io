---
title: "معجون پر ملات با طعم شکلات"
path: blog/new-blog
tags: [programming]
cover: ./cover.jpg
date: 1399-11-23
excerpt: تجربه‌ی مهاجرت از NextJS و Express و Wordpress به Gatsby
---

بابت بلاگ تازه‌ام به خودم شادباش میگم! دراز مدتی بود که دلم میخواست بلاگم رو جابه‌جا کنم و یه دستی به روی بلاگم بکشم. تقریبا از روزی که فهمیدم اون هاستی که ۴۰ هزارتومن گرفته بودم رو باید ۴۰۰ هزارتومن تمدید کنم...

خلاصه میخواستم از تجربه‌هام درمورد بلاگ پیشین و این زیبا روی تازه به دوران رسیده بگم

## بلاگ قبلی چطوری کار میکرد؟
نسخه‌ی پیشین بلاگ حاصل ریختن هر تکنولوژی‌ای که به دستم رسیده بود توی هم‌زن بود.
در واقع از React به همراه  nextJS برای ‌ServerSideRendering استفاده میکردم برای فرانت‌اند سایت و از Wordpress به صورت Headless برای بلاگ. باید این لیست همینجا تمام می‌شد ولی چون وردپرس کله جدا نه ۱۰۰٪ با RestAPI خوبه نه خیلی از Graphqlش میشه استفاده کرد، باید یه چیزی نوشت که هر دو تا رو سر هم کنه و یه خروجی قابل قبول بگیری ازش. اینجا بود که مجبور شدم با ExpressJS یه سروری هم بیارم بالا تا اون ریکوئست بزنه و دیتاها رو جمع و جور کنه بده به Front-End.
مشخصا زیبا ترین ساختاری که کسی دیده نیست.

## این بلاگ چگونه کار شگفت انگیزش را خواهد نمود؟
توی این بلاگ تنها از GatsbyJS که درواقع یک SSG برای React هست استفاده شده. این رو باید بگم که Static Site Generator به سادگی داخل NextJS هم قابل استفاده هست اما چیزی که Gatsby رو خفن‌ترین میکنه، منحصر به SSG بودنش هست. تمام امکاناتی که برای یه سایت استاتیک نیاز دارید رو داخل خودش داره. بی اندازه پلاگین کارآمد، Performance بی نظیر و بسیاری دیگر. میتونید مقایسه‌ی این دوتا فریم‌ورک رو بخونید داخل سایت خود گتسبی
https://www.gatsbyjs.com/features/jamstack/gatsby-vs-nextjs

اتفاقی که اینجا می‌افته این هست که شما میتونید با markdown پست‌هاتتون رو بنویسید، Gatsby با Graphql بهتون اجازه میده به پست‌هاتون دسترسی داشته باشید. چندتا template میسازید با react برای اینکه Gatsby از روی اون‌ها صفحه‌هاتون رو تولید کنه و تمام این اتفاقات رو میتونید روی جاهایی مثل github و gitlab به رایگان میزبانی کنید. چی دیگه از این خفن تر؟
اینجا البته یه بحث‌هایی هم پیش میاد مثل اینکه خوب commentها یا فرم تماس با ما و... رو چطوری میشه هندل کرد! که چه پرسش خوبی هم هست.

در آینده بیشتر درمورد تمام اینها خواهم گفت بهتون و حتما یه دوره‌ی کوتاه برای راه انداختن سایت روی Github Pages میذاریم. فعلا خسته از جابه‌جایی بلاگ هستم و بدرود میگم بهتون