import React from 'react';
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <img src="https://via.placeholder.com/1440x200?text=Доставка+бесплатно+от+1000+₽" alt="Баннер" />
    </div>
  );
}

export default Banner;