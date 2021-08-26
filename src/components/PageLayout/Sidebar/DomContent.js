import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegramPlane,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FeatherIcon from 'feather-icons-react'
import React from 'react'
import Config from '../../../../config'
import style from './sidebar.module.less'

const { telegram, github, instagram, twitter, linkedin } = Config.social

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} aria-label="profile image" />
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
          aria-label="telegram"
        >
          <FontAwesomeIcon className="fa" icon={faTelegramPlane} />
        </a>
        <a
          href={linkedin}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
        </a>
        <a
          href={twitter}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <FontAwesomeIcon className="fa" icon={faTwitter} />
        </a>
        <a
          href={github}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <FontAwesomeIcon className="fa" icon={faGithub} />
        </a>
        <a
          href={instagram}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <FontAwesomeIcon className="fa" icon={faInstagram} />
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
          &nbsp; &nbsp; مازندران، بابلسر، ایران
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
        <a
          href="https://github.com/ssshojaei/ssshojaei.github.io/raw/main/static/resume.pdf"
          download
          target="_blank"
          rel="noreferrer"
          aria-label="resume"
        >
          دریافت رزومه
        </a>
      </div>
    </div>
  </aside>
)

export default DomContent
