import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import { FaHeart, FaBox, FaShoppingCart, FaSearch, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Логотип" />
        </div>

        <nav className={styles.nav}>
          <button className={styles.menuBtn}>☰ Каталог</button>
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input type="text" placeholder="Найти товар" className={styles.search} />
          </div>
        </nav>

        <div className={styles.icons}>
          <button className={styles.icon}>
            <FaHeart /> <span>Избранное</span>
          </button>
          <button className={styles.icon}>
            <FaBox /> <span>Заказы</span>
          </button>
          <button className={styles.icon}>
            <FaShoppingCart /> <span>Корзина</span>
          </button>
          <div className={styles.user}>
            <img src={user} alt="User" className={styles.userlogo} />
            <span>Алексей</span>
            <button 
              className={styles.dropdownToggle} 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Выпадающее меню */}
            {isMenuOpen && (
              <div className={styles.dropdownMenu}>
                <button className={styles.dropdownItem}>
                  Профиль
                </button>
                <button className={styles.dropdownItem}>
                  Выйти
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
