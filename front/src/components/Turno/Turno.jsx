import styles from './Turno.module.css'


const Turno = ({id, date, time, userId, status, description}) => {

    return (
        <div className={styles.card}>
            <h3>{id} </h3>
            <h3>{date} </h3>
            <h3>{time} </h3>
            <h3>{userId} </h3>
            <h3>{status} </h3>
            <h3>{description} </h3>
        </div>
    )
}
export default Turno;