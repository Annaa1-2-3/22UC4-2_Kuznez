import React from 'react';
import styles from './ArticleCard.module.css';

function ArticleCard({ article }) {
  const { image, date, title, excerpt, id } = article;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <p className={styles.date}>{date}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <button className={styles.readMore}>Подробнее</button>
      </div>
    </div>
  );
}

export default ArticleCard;