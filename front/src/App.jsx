import React from 'react';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import MisTurnos from './views/MisTurnos/MisTurnos';
import Login from './views/Login/Login';
import Register from './views/Register/Register';


const App = () => {
    return (
        <>
        <Navbar/>
        <br></br>
         <Register/>
        </>
    );
}

export default App;
