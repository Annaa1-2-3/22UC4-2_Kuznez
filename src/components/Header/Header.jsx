import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Логотип" />
        </div>

        <nav className={styles.nav}>
          <button className={styles.menuBtn}>☰ Каталог</button>
          <input type="text" placeholder="Найти товар" className={styles.search} />
        </nav>

        <div className={styles.icons}>
          <button className={styles.icon}>❤ Избранное</button>
          <button className={styles.icon}>📦 Заказы</button>
          <button className={styles.icon}>🛒 Корзина</button>
          <div className={styles.user}>
            <img src={user} alt="User" />
            <span>Алексей</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;