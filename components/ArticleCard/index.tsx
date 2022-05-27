import Image from 'next/image'

import styles from './article.module.css'
import { DevToArticle } from '../../interfaces'

type ArticleCardProps = {
  article: DevToArticle
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className={styles.article}>
      {article.cover_image && <Image src={article.cover_image} alt="" height="250" width="500" className={styles.image} />}
      <section className={styles.content}>
        <h2>{article.title}</h2>
        <p className={styles.description}>{article.description}</p>
        {article.tag_list.length > 0 && <ul className={styles.tags}>
          {article.tag_list.map((tag, index) => {
            return <li className={styles.tag} key={`${tag}-${index}`}>{tag}</li>
          })}
        </ul>}
      </section>
    </article>
  )
}

export default ArticleCard
