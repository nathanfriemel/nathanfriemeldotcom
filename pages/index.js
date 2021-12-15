import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nathan Friemel</title>
        <meta name="description" content="Nathan Friemel portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the one day home of Nathan Friemel dot com
        </h1>
      </main>

      <footer className={styles.footer}>
        <span>Hi Mom</span>
      </footer>
    </div>
  )
}
