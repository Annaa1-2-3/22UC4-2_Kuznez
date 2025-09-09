import React from 'react';
import styles from './Button.module.css';

function Button({children, variant = 'default', onClick}) {
  return (
    <div>
        <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button