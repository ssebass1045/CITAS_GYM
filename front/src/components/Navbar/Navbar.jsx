import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);

    const logout = () => {
        dispatch(clearUser());
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXVrgyHK8wrw9f9NQDGhQA7H2RNKnMurcjw&s" alt="Logo" className={styles.logo} />
            </div>
            <ul className={styles.navList}>
                <li><Link to="/" className={styles.navItem}>Home</Link></li>
                <li><Link to="/about" className={styles.navItem}>About</Link></li>
                <li><Link to="/contacto" className={styles.navItem}>Contacto</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><Link to="/mis-turnos" className={styles.navItem}>Mis Turnos</Link></li>
                        <li><Link to="/nuevoTurno" className={styles.navItem}>Nuevo Turno</Link></li>
                        <li><Link to="/perfil" className={styles.navItem}>Perfil</Link></li>
                        <li><Link to="/clases" className={styles.navItem}>Clases</Link></li>
                        <li><Link to="/blog" className={styles.navItem}>Blog</Link></li>
                        <li><button onClick={logout} className={styles.navButton}>Cerrar Sesión</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login" className={styles.navItem}>Login</Link></li>
                        <li><Link to="/register" className={styles.navItem}>Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;


