import React from 'react';
import styles from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contáctanos</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
