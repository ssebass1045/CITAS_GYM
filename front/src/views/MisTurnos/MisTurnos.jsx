//import misTurnos from "../../helpers/misTurnos";
import { useState, useEffect } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";

const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);
    
    useEffect(() => {
        //aca quiero hacer la peticion
        axios.get("http://localhost:3000/turns")
        // OJo cuando llega la respuesta quiero darle a mi estado ese valor
        .then(res=> setTurnos(res.data))
    },[])

    return (
        <>
        <h1>MIS TURNOS</h1>
        <br></br>
        <div className={styles.container}>
            {
                turnos.map((turno) => {
                    return <Turno key={turno.id} {...turno} />;
            })}
            
        </div>
        </>
    )
}

export default MisTurnos;