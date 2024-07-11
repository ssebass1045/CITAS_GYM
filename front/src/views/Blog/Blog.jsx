import React from 'react';
import styles from './Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Beneficios de la Rutina de Ejercicio Regular',
      content: 'Realizar ejercicio regularmente no solo mejora tu condición física, sino que también beneficia tu salud mental. Ayuda a reducir el estrés, mejora el sueño y aumenta tu nivel de energía diario.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lR2HQNTZm8R-6GqwdIqMiOqji7HrB7FK9w&s',
    },
    {
      title: 'Cómo Mantener una Dieta Equilibrada',
      content: 'Mantener una dieta equilibrada es crucial para tu bienestar. Incluye una variedad de alimentos ricos en nutrientes, como frutas, verduras, proteínas magras y granos enteros. Evita el exceso de azúcares y grasas saturadas.',
      image: 'https://crehana-blog.imgix.net/media/filer_public/39/53/3953ac56-9f1c-4a92-9525-9fd4a95724a2/ejercicios-saludables-musculatura-hombre.jpg?auto=format&q=50',
    },
    {
      title: 'Importancia del Descanso en el Fitness',
      content: 'El descanso es esencial para el crecimiento muscular y la recuperación. Dormir al menos 7-8 horas por noche y tomar días de descanso en tu rutina de ejercicios puede prevenir lesiones y mejorar tu rendimiento.',
      image: 'https://crehana-blog.imgix.net/media/filer_public/ed/96/ed96f2db-2c7b-4f68-aede-7a34680ab4f8/estilo-vida-fitness-saludable.jpg?auto=format&q=50',
    },
    {
      title: 'División de Entrenamiento: Cómo Organizar tus Sesiones',
      content: 'Dividir tu entrenamiento en diferentes sesiones enfocadas en distintos grupos musculares puede ser más efectivo que entrenar todo el cuerpo en una sola sesión. Esto permite una recuperación adecuada y un enfoque más intensivo en cada grupo muscular.',
      image: 'https://www.gymcompany.es/blog/wp-content/uploads/2020/08/dividir-entrenos.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.blogContent}>
        <h2 className={styles.title}>Blog de Salud y Fitness</h2>
        {blogPosts.map((post, index) => (
          <div className={styles.blogPost} key={index}>
            <img className={styles.image} src={post.image} alt={post.title} />
            <div className={styles.textContent}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
