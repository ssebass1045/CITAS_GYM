import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
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
import ErrorPage from './components/Error/Error';

const App = () => {
    const { isAuthenticated } = useAuth();
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
                <Route path="*" element={<ErrorPage />} />
                {isAuthenticated ? (
                    <>
                        <Route path="/mis-turnos" element={<MisTurnos />} />
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







// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Navbar from './components/Navbar/Navbar';
// import Home from './views/Home/Home';
// import MisTurnos from './views/MisTurnos/MisTurnos';
// import About from './views/About/About';
// import Contacto from './views/Contacto/Contacto';
// import Perfil from './views/Perfil/Perfil';
// import Clases from './views/Clases/Clases';
// import Blog from './views/Blog/Blog';
// import Login from './views/Login/Login';
// import Register from './views/Register/Register';
// import ErrorPage from './components/Error/Error';

// const App = () => {
//     const { isAuthenticated } = useAuth();
//     console.log('Is Authenticated:', isAuthenticated);

//     return (
//         <>
//             <Navbar />
//             <Routes>
//                 <Route path="/" exact component={Home} />
//                 <Route path="/about" component={About} />
//                 <Route path="/contacto" component={Contacto} />
//                 <Route path="/login" component={Login} />
//                 <Route path="/register" component={Register} />
//                 <Route path="/*" component={ErrorPage}/>
//                 {isAuthenticated ? (
//                     <>
//                         <Route path="/mis-turnos" component={MisTurnos} />
//                         <Route path="/perfil" component={Perfil} />
//                         <Route path="/clases" component={Clases} />
//                         <Route path="/blog" component={Blog} />
//                         <Route path="/" component={Home}  />
//                     </>
//                 ) : (
//                     <Route path="/login" component={Login} />
//                 )}
//             </Routes>
//         </>
//     );
// };

// export default App;
