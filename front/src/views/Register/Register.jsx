import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './Register.module.css';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    birthday: '',
    nDni: '',
    credential: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Campo Requerido'),
    email: Yup.string().email('Formato de correo inválido').required('Campo Requerido'),
    birthday: Yup.date().required('Campo Requerido'),
    nDni: Yup.string().required('Campo Requerido'),
    credential: Yup.object({
      username: Yup.string().required('Campo Requerido'),
      password: Yup.string().required('Campo Requerido'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        .required('Campo Requerido'),
    }),
  });

  const onSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await axios.post('http://localhost:3000/users/register', {
        name: values.name,
        email: values.email,
        birthday: values.birthday,
        nDni: values.nDni,
        credential: {
          username: values.credential.username,
          password: values.credential.password,
        },
      });

      if (response.status === 200) {
        setStatus({ success: true });
        resetForm();
        window.alert('¡Registro exitoso!');
      }
    } catch (error) {
      setStatus({ success: false });
      window.alert('¡Registro fallido!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <center><h1 className={styles.title}>Registro</h1></center>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, isValid, dirty, status }) => (
            <Form>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="name">Nombre</label>
                <Field className={styles.input} type="text" id="name" name="name" placeholder="Ej: Juanito Perez" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <Field className={styles.input} type="email" id="email" name="email" placeholder="Ej: Juanito@email.com" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="birthday">Fecha de Nacimiento</label>
                <Field className={styles.input} type="date" id="birthday" name="birthday" />
                <ErrorMessage name="birthday" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="nDni">Documento Identidad</label>
                <Field className={styles.input} type="text" id="nDni" name="nDni" placeholder="Ej: 5555555" />
                <ErrorMessage name="nDni" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="username">Username</label>
                <Field className={styles.input} type="text" id="username" name="credential.username" placeholder="Ej: Juanito22" />
                <ErrorMessage name="credential.username" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="password">Password</label>
                <Field className={styles.input} type="password" id="password" name="credential.password" placeholder="*****" />
                <ErrorMessage name="credential.password" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="confirmPassword">Confirmar Password</label>
                <Field className={styles.input} type="password" id="confirmPassword" name="credential.confirmPassword" placeholder="*****" />
                <ErrorMessage name="credential.confirmPassword" component="div" />
              </div>
              <center><button className={styles.button} type="submit" disabled={!(dirty && isValid) || isSubmitting}>
                Registrar
              </button></center>
              {status && status.success === false && (
                <div>¡Registro fallido! Intenta de nuevo.</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
