import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Aquí iría tu lógica de registro, como una llamada a una API para crear una nueva cuenta
        login(); // Después de registrarse exitosamente, actualiza el estado de autenticación
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
