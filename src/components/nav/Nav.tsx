import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Nav.module.css'

function Nav() {
  return (
    <div className={styles.main}>
      <div className="brand">
        <Link href="/">
            <Image src="/img/logo.png" alt="logo" width={200} height={35} />
        </Link>
      </div>
      <div className={styles.menu}>
        <Link href="/time">
          Time Machine
        </Link>
      </div>
    </div>
  )
}

export default Nav