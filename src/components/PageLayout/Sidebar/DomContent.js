import FeatherIcon from 'feather-icons-react'
import React from 'react'
import FA from 'react-fontawesome'
import Config from '../../../../config'
import style from './sidebar.module.less'

const { telegram, github, instagram, twitter } = Config.social

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          سید <span>صالح شجاعی</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>
        Senior Front-end Developer
      </div>
      <div className="centerAlign box">
        <a
          href={telegram}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="telegram" />
        </a>
        <a
          href={twitter}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="twitter" />
        </a>
        <a
          href={github}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="github" />
        </a>
        <a
          href={instagram}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="instagram" />
        </a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />{' '}
          </span>
          &nbsp; &nbsp; بهمن ۱۳۷۸
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="map-pin" />
          </span>{' '}
          &nbsp; &nbsp; شیراز، ایران
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="mail" />
          </span>{' '}
          &nbsp; &nbsp;
          <a href="mailto:ordinarySaleh@pm.me" target="_top">
            <span className={style.emailHider}>@</span>
          </a>
        </li>
      </ul>
      <div className={style.resumeDownload}>
        <a href="../resume.pdf" download target="_blank">
          دریافت رزومه
        </a>
      </div>
    </div>
  </aside>
)

export default DomContent
