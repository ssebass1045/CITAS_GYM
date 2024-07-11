import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  const galleryImages = [
    "https://media.gq.com.mx/photos/5f8dbcd92e0c232544d07e55/master/pass/PRESS.jpg",
    "https://www.gymcompany.es/blog/wp-content/uploads/2020/08/dividir-entrenos.jpg",
    "https://fhinstitute.com/wp-content/uploads/2023/04/Diversidad-de-Maquinas-en-Gimnasios.jpg"
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenido a tu Gimnasio</h1>
        <p className={styles.subtitle}>Reserva tus clases personalizadas ahora mismo</p>
        <div className={styles.info}>
          <p>En nuestro gimnasio, encontrarás una amplia variedad de equipos de última generación, entrenadores certificados y un ambiente motivador que te ayudará a alcanzar tus objetivos de fitness.</p>
          <p>Ofrecemos clases personalizadas que se adaptan a tus necesidades y nivel de condición física.</p>
        </div>
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <img key={index} className={styles.galleryImage} src={image} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
