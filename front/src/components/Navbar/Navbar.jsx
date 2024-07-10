
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li><Link to="/" className={styles.navItem}>Home</Link></li>
                <li><Link to="/about" className={styles.navItem}>About</Link></li>
                <li><Link to="/contacto" className={styles.navItem}>Contacto</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><Link to="/mis-turnos" className={styles.navItem}>Mis-Turnos</Link></li>
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

