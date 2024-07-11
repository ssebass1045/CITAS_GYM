import React from 'react';
import styles from './Clases.module.css';

const Clases = () => {
  const classes = [
    { name: 'Yoga', schedule: 'Lunes y Miércoles - 7:00 AM' },
    { name: 'Pilates', schedule: 'Martes y Jueves - 6:00 PM' },
    { name: 'Crossfit', schedule: 'Viernes - 5:00 PM' },
    { name: 'Zumba', schedule: 'Sábado - 10:00 AM' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Clases Disponibles</h1>
      <div className={styles.classes}>
        {classes.map((classItem, index) => (
          <div className={styles.classItem} key={index}>
            <h2>{classItem.name}</h2>
            <p>{classItem.schedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clases;
