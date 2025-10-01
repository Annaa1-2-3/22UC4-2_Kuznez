import React, {useState} from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import SectionTitle from './components/SectionTitle/SectionTitle';
import ProductCard from './components/ProductCard/ProductCard';
import ArticleCard from './components/ArticleCard/ArticleCard';
import Map from './components/Map/Map';
import styles from './App.module.css';
import card1 from './assets/card_1.png';
import card2 from './assets/card_2.png';
import card3 from './assets/card_3.png';
import map from './assets/map.png';
import offer1 from './assets/offer_1.png';
import offer2 from './assets/offer_2.png';
import logo2 from './assets/logo_2.png';
import inst from './assets/insta.png';
import vk from './assets/vk.png';
import facebook from './assets/facebook.png';
import ok from './assets/ok.png';
import { promotions, newProducts, boughtBefore } from './data/products';
import { FaInstagram, FaVk, FaFacebook, FaOdnoklassniki, FaPhone } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    image: card1,
    date: '05.03.2021',
    title: 'Режим использования масок и перчаток на территории магазинов',
    excerpt: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
  },
  {
    id: 2,
    image: card2,
    date: '05.03.2021',
    title: 'Весеннее настроение для каждой',
    excerpt: '8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.',
  },
  {
    id: 3,
    image: card3,
    date: '22.02.2020',
    title: 'ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!',
    excerpt: 'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в преле!',
  },
];

const [selectedLocation, setSelectedLocation] = useState('shchelyur');
const locations = [
  { id: 'shchelyur', name: 'п.Щельяюр', isActive: true },
  { id: 'vertep', name: 'д.Вертеп', isActive: false },
  { id: 'krasnobor', name: 'с.Краснобор', isActive: false },
  { id: 'dnyor', name: 'д.Днюр', isActive: false },
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
            <img src={offer1} alt="Акции" />
          </div>
          <div className={styles.offer}>
            <img src={offer2} alt="Акции" />
          </div>
        </div>
      </section>

      {/* Наши магазины */}
      <section className={styles.section}>
        <SectionTitle title="Наши магазины" />
        
        {/* Кнопки выбора локации */}
        <LocationButtons 
          locations={locations} 
          onLocationChange={setSelectedLocation} 
          selectedId={selectedLocation} 
        />

        {/* Карта */}
        <Map selectedLocation={selectedLocation} />
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
            <img src={logo2} alt="Logo" />
          </div>
          <nav className={styles.footerNav}>
            <button className={styles.footerLink}>О компании</button>
            <button className={styles.footerLink}>Контакты</button>
            <button className={styles.footerLink}>Вакансии</button>
            <button className={styles.footerLink}>Статьи</button>
            <button className={styles.footerLink}>Политика обработки персональных данных</button>
          </nav>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaVk className={styles.socialIcon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaFacebook className={styles.socialIcon} />
            </a>
            <a href="https://ok.ru" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaOdnoklassniki className={styles.socialIcon} />
            </a>
          </div>

          <div className={styles.phone}>
            <FaPhone className={styles.phoneIcon} />
            <span>8 800 777 33 33</span>
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
