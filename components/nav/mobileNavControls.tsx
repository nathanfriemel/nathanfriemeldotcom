import { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './nav.module.css'

const cx = classNames.bind(styles)

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={cx('mobileMenu', { menuOpen: menuOpen })} onClick={() => setMenuOpen(!menuOpen)}>
      <span style={{ display: 'block', margin: '20px 0', width: '30px' }}>NF</span>
      <span className={cx(['mobileLine', 'topLine'])}></span>
      <span className={cx(['mobileLine', 'middleLine'])}></span>
      <span className={cx(['mobileLine', 'bottomLine'])}></span>
    </div>
  )
}

export default Nav
