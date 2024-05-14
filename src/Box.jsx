import styles from './Box.module.css';

import { nextPlayer, calculateWinner } from './utils.js';

export default function Box(props) {
    const color = props.value === 'O' ? props.colorO : props.colorX;

    const player = nextPlayer(props.cells, props.lastWinner);
    const winner = calculateWinner(props.cells);

    const hoverColor = !props.value && !winner ? `box${player}` : 'notPlayable';

    const lastCell = props.isLastCell ? `lastBox${player}` : '';

    const backgroundColor = props.isWinner ? '#6C757D' : '#343A40';

    return (
        <>
            <button className={`${styles.box} ${styles[hoverColor]} ${styles[lastCell] ? styles[lastCell] : ''}`} style={{color: color, backgroundColor: backgroundColor}} onClick={props.onBoxClick}>{props.value}</button>
        </>
    )
}