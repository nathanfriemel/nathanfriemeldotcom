import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import ArticleCard from '../components/ArticleCard'
import { DevToArticle } from '../interfaces'

const USERNAME = 'nathanfriemel'

type HomePageProps = {
  articles: DevToArticle[]
}

const IndexPage = ({ articles }: HomePageProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nathan Friemel</title>
        <meta name="description" content="Nathan Friemel portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>
            Hi, <br />I&apos;m Nathan, <br />I build websites, <br />I build teams
          </h1>
        </header>
        {articles.length > 0 && <div className={styles.articles}>
          {articles.map(article => {
            return (
              <ArticleCard article={article} key={article.id} />
            )
          })}
        </div>}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles?username=${USERNAME}`)
  const data = await res.json()

  return { props: { articles: data } }
}

export default IndexPage
