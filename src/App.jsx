import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import SectionTitle from './components/SectionTitle/SectionTitle';
import ProductCard from './components/ProductCard/ProductCard';
import ArticleCard from './components/ArticleCard/ArticleCard';
import Map from './components/Map/Map';
import styles from './App.module.css';
import { promotions, newProducts, boughtBefore } from './data/products';

const articles = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x250',
    date: '05.03.2021',
    title: 'Режим использования масок и перчаток на территории магазинов',
    excerpt: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x250',
    date: '05.03.2021',
    title: 'Весеннее настроение для каждой',
    excerpt: '8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/400x250',
    date: '22.02.2020',
    title: 'ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!',
    excerpt: 'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в преле!',
  },
];

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />

      {/* Акции */}
      <section className={styles.section}>
        <SectionTitle title="Акции" linkText="Все акции" />
        <div className={styles.productsGrid}>
          {promotions.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Новинки */}
      <section className={styles.section}>
        <SectionTitle title="Новинки" linkText="Все новинки" />
        <div className={styles.productsGrid}>
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Покупали раньше */}
      <section className={styles.section}>
        <SectionTitle title="Покупали раньше" linkText="Все покупки" />
        <div className={styles.productsGrid}>
          {boughtBefore.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Специальные предложения */}
      <section className={styles.section}>
        <SectionTitle title="Специальные предложения" />
        <div className={styles.specialOffers}>
          <div className={styles.offer}>
            <img src="https://via.placeholder.com/600x150?text=Карта+Северяночка" alt="Карта" />
          </div>
          <div className={styles.offer}>
            <img src="https://via.placeholder.com/600x150?text=Акционные+товары" alt="Акции" />
          </div>
        </div>
      </section>

      {/* Наши магазины */}
      <section className={styles.section}>
        <SectionTitle title="Наши магазины" />
        <Map />
      </section>

      {/* Статьи */}
      <section className={styles.section}>
        <SectionTitle title="Статьи" linkText="Все статьи" />
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <img src="https://via.placeholder.com/40" alt="Logo" />
            <span>СЕВЕРЯНОЧКА</span>
          </div>
          <nav className={styles.footerNav}>
            <button className={styles.footerLink}>О компании</button>
            <button className={styles.footerLink}>Контакты</button>
            <button className={styles.footerLink}>Вакансии</button>
            <button className={styles.footerLink}>Статьи</button>
            <button className={styles.footerLink}>Политика обработки персональных данных</button>
          </nav>
          <div className={styles.social}>
            <button className={styles.footerLink}>Instagram</button>
            <button className={styles.footerLink}>VK</button>
            <button className={styles.footerLink}>Facebook</button>
            <button className={styles.footerLink}>Odnoklassniki</button>
          </div>
          <div className={styles.phone}>
            <span>📞 8 800 777 33 33</span>
          </div>
        </div>
        <div className={styles.designer}>
          Дизайн: ZASOVSKIY
        </div>
      </footer>
    </div>
  );
}

export default App;