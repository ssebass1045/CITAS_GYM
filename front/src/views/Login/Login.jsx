import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        // Aquí iría tu lógica de autenticación, como una llamada a una API
        login(); // Actualiza el estado de autenticación
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
}

export default Login;
