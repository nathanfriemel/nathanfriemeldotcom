import { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './nav.module.css'
import { MobileNavProps } from '../../interfaces'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../icons'

const cx = classNames.bind(styles)

const MobileNav = ({ socialColor }: MobileNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className={cx('mobileMenuControl', { menuOpen: menuOpen })} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={cx(['mobileLine', 'topLine'])}></span>
        <span className={cx(['mobileLine', 'middleLine'])}></span>
        <span className={cx(['mobileLine', 'bottomLine'])}></span>
      </div>
      <nav className={cx('mobileMenu', { menuOpen: menuOpen })}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Work</a>
        <div className={styles.mobileSocials}>
          <TwitterIcon fill={socialColor} />
          <LinkedinIcon fill={socialColor} />
          <GithubIcon fill={socialColor} />
        </div>
      </nav>
    </>
  )
}

export default MobileNav
