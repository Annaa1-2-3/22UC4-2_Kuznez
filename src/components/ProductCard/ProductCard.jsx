import React from 'react';
import styles from './ProductCard.module.css';
import Button from '../Button/Button';

function ProductCard({ product }) {
  const { name, img, price, oldPrice, rating, isPromo } = product;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={img} alt={name} className={styles.image} />
        {isPromo && <span className={styles.promoTag}>-{isPromo}%</span>}
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <div className={styles.priceBlock}>
          <strong className={styles.price}>{price} ₽</strong>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice} ₽</span>}
        </div>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? styles.star : styles.emptyStar}>
              ★
            </span>
          ))}
        </div>
      </div>

      <Button
        variant={isPromo ? 'orange' : 'default'}
        className={styles.addToCart}
      >
        В корзину
      </Button>
    </div>
  );
}

export default ProductCard;
