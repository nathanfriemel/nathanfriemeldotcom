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
        <TwitterIcon fill={socialColor} />
        <LinkedinIcon fill={socialColor} />
        <GithubIcon fill={socialColor} />
      </nav>
    </>
  )
}

export default Nav
