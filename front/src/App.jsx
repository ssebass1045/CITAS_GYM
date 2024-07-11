
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import MisTurnos from './views/MisTurnos/MisTurnos';
import About from './views/About/About';
import Contacto from './views/Contacto/Contacto';
import Perfil from './views/Perfil/Perfil';
import Clases from './views/Clases/Clases';
import Blog from './views/Blog/Blog';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
//import ErrorPage from './components/Error/Error';
import { useSelector } from 'react-redux';
import NuevoTurno from './views/MisTurnos/Nuevoturno';

const App = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    console.log('Is Authenticated:', isAuthenticated);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
                {isAuthenticated ? (
                    <>
                        <Route path="/mis-turnos" element={<MisTurnos />} />
                        <Route path="/nuevoTurno" element={<NuevoTurno />} />
                        <Route path="/perfil" element={<Perfil />} />
                        <Route path="/clases" element={<Clases />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/" element={<Home />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/login" />} />
                )}
            </Routes>
        </>
    );
};

export default App;

