import React from 'react';
import styles from './Navbar.module.css';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li><a href="/" className={styles.navItem}>Home</a></li>
                <li><a href="/mis-turnos" className={styles.navItem}>Mis-Turnos</a></li>
                <li><a href="/about" className={styles.navItem}>About</a></li>
                <li><a href="/contacto" className={styles.navItem}>Contacto</a></li>
                {isAuthenticated ? (
                    <>
                        <li><a href="/perfil" className={styles.navItem}>Perfil</a></li>
                        <li><a href="/clases" className={styles.navItem}>Clases</a></li>
                        <li><a href="/blog" className={styles.navItem}>Blog</a></li>
                        <li><button onClick={logout} className={styles.navButton}>Cerrar Sesión</button></li>
                    </>
                ) : (
                    <>
                        <li><a href="/login" className={styles.navItem}>Login</a></li>
                        <li><a href="/register" className={styles.navItem}>Register</a></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
