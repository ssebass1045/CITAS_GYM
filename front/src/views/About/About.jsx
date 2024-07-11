import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContent}>
        <h2 className={styles.title}>Acerca de Nosotros</h2>
        <p>
          Somos un gimnasio dedicado a ofrecer clases personalizadas para mejorar tu salud y bienestar.
          Nuestro equipo de entrenadores calificados está aquí para ayudarte a alcanzar tus metas fitness.
        </p>
        {/* Puedes agregar más contenido sobre el gimnasio */}
      </div>
    </div>
  );
};

export default About;
