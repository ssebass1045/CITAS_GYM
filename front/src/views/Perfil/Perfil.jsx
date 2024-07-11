import React from 'react';
import styles from './Perfil.module.css';

const Perfil = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <h2 className={styles.title}>Mi Perfil</h2>
        <div className={styles.profileInfo}>
          <p><strong>Nombre:</strong> Usuario</p>
          <p><strong>Email:</strong> usuario@example.com</p>
          {/* Aquí puedes mostrar más información del perfil */}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
