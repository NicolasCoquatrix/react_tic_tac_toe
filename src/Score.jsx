import styles from './Score.module.css';

export default function Score(props) {
    return (
        <>
            <div className={styles.grid}>
                <p className={styles.score} style={{color: props.colorX }}>X : {props.scoreX}</p>
                <p className={styles.score}>Égalité : {props.scoreEquality}</p>
                <p className={styles.score} style={{color: props.colorO }}>O : {props.scoreO}</p>
            </div>
        </>
    )
}