import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './Login.module.css';

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        username: values.username,
        password: values.password,
      });

      if (response.status === 200) {
        setStatus({ success: true });
        window.alert('Login successful!');
        // Aquí puedes manejar el almacenamiento del token y la redirección si es necesario.
      }
    } catch (error) {
      setStatus({ success: false });
      window.alert('Login failed!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <center><h1 className={styles.title}  >Login</h1></center>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, isValid, dirty, status }) => (
            <Form>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="username">Username:</label>
                <Field className={styles.input} type="text" id="username" name="username" />
                <ErrorMessage name="username" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="password">Password:</label>
                <Field className={styles.input} type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <center><button className={styles.button} type="submit" disabled={!(dirty && isValid) || isSubmitting}>
                Login
              </button></center>
              {status && status.success === false && (
                <div>Login failed! Please try again.</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
