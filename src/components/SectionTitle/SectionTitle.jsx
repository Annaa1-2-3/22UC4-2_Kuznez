import React from 'react';
import styles from './SectionTitle.module.css';

function SectionTitle({ title, linkText, onClick }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {linkText && (
        <button className={styles.link} onClick={onClick}>
          {linkText} →
        </button>
      )}
    </div>
  );
}

export default SectionTitle;