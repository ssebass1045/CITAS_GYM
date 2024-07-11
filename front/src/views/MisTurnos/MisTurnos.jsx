
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTurns } from "../../redux/turnsSlice";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";

const MisTurnos = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const turnos = useSelector((state) => state.userTurns.turns);
    console.log(user);
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:3000/users/${user}`)
                .then(res => {
                    dispatch(setTurns(res.data.turns));
                });
        }
    }, [user, dispatch]);

    if (!user) {
        return <div>Please log in to see your turns.</div>;
    }

    return (
        <>
            <h1>MIS TURNOS</h1>
            <br></br>
            <div className={styles.container}>
                {turnos.length > 0 ? (
                    turnos.map((turno) => (
                        <Turno key={turno.id} {...turno} />
                    ))
                ) : (
                    <div>No hay turnos agendados.</div>
                )}
            </div>
        </>
    );
}

export default MisTurnos;




