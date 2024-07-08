import misTurnos from "../../helpers/misTurnos";
import { useState } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(misTurnos);
    console.log(turnos);

    return (
        <>
        <div className={styles.container}>
        <h1>MIS TURNOS</h1>
            {
                turnos.map((turno) => {
                    return <Turno key={turno.id} {...turno} />;
            })}
            
        </div>
        </>
    )
}

export default MisTurnos;