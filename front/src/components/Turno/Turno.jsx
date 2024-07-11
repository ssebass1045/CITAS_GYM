import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTurns } from "../../redux/turnsSlice";
import styles from "./Turno.module.css";

const Turno = ({ id, date, time, status, description }) => {
    

    const cancelTurno = async () => {
        try {
            await axios.put(`http://localhost:3000/turns/cancelar/${id}`);
            
        } catch (error) {
            console.error("Error cancelling turn:", error);
        }
    };

    return (
        <div className={styles.card}>
            
            <h3>Fecha: {date} </h3>
            <h3>Hora: {time} </h3>
            <h3 className={styles[status]}>{status.toUpperCase()} </h3>
            <h3>{description} </h3>
            {status !== "cancelled" && (
                <button onClick={cancelTurno}>Cancelar Turno</button>
            )}
        </div>
    );
}

export default Turno;














// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { setTurns } from "../../redux/turnsSlice";
// import styles from "./Turno.module.css";

// const Turno = ({ id, date, time, status, description }) => {
//     const dispatch = useDispatch();

//     const cancelTurno = async () => {
//         try {
//             await axios.put(`http://localhost:3000/turns/cancelar/${id}`);
//             const response = await axios.get(`http://localhost:3000/turns`);
//             dispatch(setTurns(response.data));
//         } catch (error) {
//             console.error("Error cancelling turn:", error);
//         }
//     };

//     return (
//         <div className={styles.card}>
//             <h3>Id Turno: {id} </h3>
//             <h3>Fecha: {date} </h3>
//             <h3>Hora: {time} </h3>
//             <h3 className={styles[status]}>{status.toUpperCase()} </h3>
//             <h3>{description} </h3>
//             <button onClick={cancelTurno} disabled={status === "cancelled"}>Cancelar Turno</button>
//         </div>
//     )
// }

// export default Turno;










// import styles from './Turno.module.css'


// const Turno = ({id, date, time, status, description}) => {

//     return (
//         <div className={styles.card}>
//             <h3>Id Turno: {id} </h3>
//             <h3>Fecha: {date} </h3>
//             <h3>Hora: {time} </h3>
//             <h3 className={styles[status]}>{status.toUpperCase()} </h3>
//             <h3>{description} </h3>
//             <button disabled={status == "cancelled"}>Cancelar Turno</button>
//         </div>
//     )
// }
// export default Turno;