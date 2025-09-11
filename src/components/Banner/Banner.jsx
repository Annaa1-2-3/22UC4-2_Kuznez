import React from 'react';
import styles from './Banner.module.css';
import banner from '../../assets/banner.png';

function Banner() {
  return (
    <div className={styles.banner} img src={banner} alt="Баннер" />
  );
}

export default Banner;