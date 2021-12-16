import Head from 'next/head'
// import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../icons'

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nathan Friemel</title>
        <meta name="description" content="Nathan Friemel portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.leftNav}>
        <span style={{ marginTop: '1rem' }}>NF</span>
        <TwitterIcon fill="#FFFFFF" />
        <LinkedinIcon fill="#FFFFFF" />
        <GithubIcon fill="#FFFFFF" />
      </nav>

      <main className={styles.main}>
        <article className={styles.article}>
          <h1>
            Welcome to the one day home of Nathan Friemel dot com
          </h1>
        </article>
      </main>
    </div>
  )
}

export default IndexPage
