import styles from './Turno.module.css'


const Turno = ({id, date, time, status, description}) => {

    return (
        <div className={styles.card}>
            <h3>Id Turno: {id} </h3>
            <h3>Fecha: {date} </h3>
            <h3>Hora: {time} </h3>
            <h3 className={styles[status]}>{status.toUpperCase()} </h3>
            <h3>{description} </h3>
            <button disabled={status == "cancelled"}>Cancelar Turno</button>
        </div>
    )
}
export default Turno;