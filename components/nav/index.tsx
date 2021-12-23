import styles from './nav.module.css'
import MobileNavControls from './mobileNavControls'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../icons'

const Nav = () => {
  return (
    <nav className={styles.leftNav}>
      <MobileNavControls />
      <TwitterIcon fill="#FFFFFF" />
      <LinkedinIcon fill="#FFFFFF" />
      <GithubIcon fill="#FFFFFF" />
    </nav>
  )
}

export default Nav
