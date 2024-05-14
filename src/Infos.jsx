import styles from './Infos.module.css';

import { nextPlayer, calculateWinner } from './utils.js';

export default function Infos(props) {
    const player = nextPlayer(props.cells, props.lastWinner);
    const colorPlayer = player === 'O' ? props.colorO : props.colorX;

    const winner = calculateWinner(props.cells);
    const colorWinner = winner === 'O' ? props.colorO : props.colorX;

    if (!winner) {
        if(props.cells.includes(null)) {
            return (
                <>
                    <p className={styles.text}>C'est à <span className={styles.player} style={{color: colorPlayer}}>{player}</span> de jouer.</p>
                    <button onClick={props.onRestart}>Recommencer</button>
                </>
            )
        } else {
            return (
                <>
                    <p className={styles.text}>Égalité.</p>
                    <button onClick={props.onRestart}>Rejouer</button>
                </>
            )
        }
    } else {
        return (
            <>
                <p className={styles.text}>Bravo, <span className={styles.player} style={{color: colorWinner}}>{winner}</span> à gagné.</p>
                <button onClick={props.onRestart}>Rejouer</button>
            </>
        )
    }
}
  