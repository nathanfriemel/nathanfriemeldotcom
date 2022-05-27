import styles from './nav.module.css'
import MobileNavControls from './mobileNav'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../icons'

const socialColor = '#ffffff'

const Nav = () => {
  return (
    <>
      <MobileNavControls socialColor={socialColor} />
      <nav className={styles.leftNav}>
        <span className={styles.logo}>NF</span>
        <a href="https://twitter.com/nathanf">
          <TwitterIcon fill={socialColor} />
        </a>
        <a href="https://www.linkedin.com/in/nathan-friemel/">
          <LinkedinIcon fill={socialColor} />
        </a>
        <a href="https://github.com/nathanfriemel">
          <GithubIcon fill={socialColor} />
        </a>
      </nav>
    </>
  )
}

export default Nav
