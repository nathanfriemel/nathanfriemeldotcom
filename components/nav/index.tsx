import styles from './nav.module.css'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../icons'

const Nav = () => {
  return (
    <nav className={styles.leftNav}>
        <span style={{ marginTop: '1rem' }}>NF</span>
        <TwitterIcon fill="#FFFFFF" />
        <LinkedinIcon fill="#FFFFFF" />
        <GithubIcon fill="#FFFFFF" />
      </nav>
  )
}

export default Nav
