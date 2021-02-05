import { Col, Row } from 'antd'
import React from 'react'
import { domHtml, stripTags } from '../../../utils/stripTags'
import AboutTile from '../../AboutTile'
import SEO from '../../Seo'

const pageText = {
  paraOne: `
  من سید صالح شجاعی هستم، Front-end Developer و CTO در هلدینگ ژیهات. همینطور در بخش فناوری هفته‌نامه‌ی سراسری جهان‌تاب هم مینویسم گاهی.
  از منتقل کردن تجربه هام به بقیه لذت میبرم، ویدیوها، نوشته‌ها و پادکست‌های من رو می‌تونید از همین بلاگ دنبال کنید`,
  paraTwo: `دوست‌دار دوچرخه سواری، کوله‌گردی، پیاده‌روی، موسیقی‌های کمتر شنیده و آدم‌های کمتر دیده شده هستم. گیاه‌خوار مطلق، معمولا درون‌گرا و کم حرف.`,
}

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`

  return (
    <>
      <div>
        <SEO
          title="درباره‌ی من"
          description={description}
          path=""
          keywords={[
            'javascript',
            'با صالح',
            'roxaleh',
            'رکساله',
            'basaleh',
            'ba saleh',
            'سید صالح شجاعی',
            'صالح شجاعی',
            'آموزش الکترون',
            'شیرازلاگ',
          ]}
        />
        <h1 className="titleSeparate">درباره‌ی من</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH3="زاده‌ی شیراز"
            textH4="سر خوش از زاده‌ی بهشت بودن"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH3="کافئین دوست"
            textH4="دوست‌دار قهوه‌ی سر صُپی"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH3="پروردگار کاریزما"
            textH4="بد جور تعاملی به وقتش"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH3="دوچرخه برای زندگی"
            textH4="زندگی برای دوچرخه"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH3="خود آموز"
            textH4="سپاس از ‌MDN و برادران"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH3="دانشجوی خفن"
            textH4="سابقه‌ی ۲ اخراج درخشان"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  )
}
export default AboutMe
