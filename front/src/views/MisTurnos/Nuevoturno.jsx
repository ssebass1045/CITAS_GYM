import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './NuevoTurno.module.css';

const NuevoTurno = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const initialValues = {
    date: '',
    time: '',
    description: '',
  };

  const validationSchema = Yup.object({
    date: Yup.date().required('Campo Requerido'),
    time: Yup.string().required('Campo Requerido'),
    description: Yup.string().required('Campo Requerido'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
        console.log(values);
      const response = await axios.post('http://localhost:3000/turns/agendar', {
        ...values,
        userId: user,
        status: 'active',
      });
      console.log({...values,userId: user.user,
        status: 'active',});
      if (response.status === 201) {
        console.log("Entramos al if");
        setStatus({ success: true });
        window.alert('¡Turno agendado exitosamente!');
        resetForm();
        navigate('/mis-turnos');
      }
    } catch (error) {
      setStatus({ success: false });
      window.alert('¡Error al agendar el turno!');
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) {
    return <div>Debes iniciar sesión para agendar un turno.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <center><h1 className={styles.title}>Agendar Turno</h1></center>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, isValid, dirty, status }) => (
            <Form>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="date">Fecha:</label>
                <Field className={styles.input} type="date" id="date" name="date" />
                <ErrorMessage name="date" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="time">Hora:</label>
                <Field className={styles.input} type="time" id="time" name="time" />
                <ErrorMessage name="time" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="description">Descripción:</label>
                <Field className={styles.input} type="text" id="description" name="description" placeholder="Ej: Sesión privada" />
                <ErrorMessage name="description" component="div" />
              </div>
              <center>
                <button className={styles.button} type="submit" disabled={!(dirty && isValid) || isSubmitting}>
                  Agendar Turno
                </button>
              </center>
              {status && status.success === false && (
                <div>¡Error al agendar el turno! Intenta de nuevo.</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NuevoTurno;

