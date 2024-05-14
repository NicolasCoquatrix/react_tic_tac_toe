import styles from './Grid.module.css';

import Box from './Box.jsx';
import { calculateWinnersCells } from './utils.js';

export default function Grid(props) {
    const winnerCells = calculateWinnersCells(props.cells);

    return (
        <>
            <div className={styles.grid}>
                <Box
                    value={props.cells[0]}
                    onBoxClick={() => props.onBoxClickIndex(0)}
                    isWinner={winnerCells && winnerCells.includes(0)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 0 ? true : false}
                />
                <Box
                    value={props.cells[1]}
                    onBoxClick={() => props.onBoxClickIndex(1)}
                    isWinner={winnerCells && winnerCells.includes(1)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 1 ? true : false}
                />
                <Box
                    value={props.cells[2]}
                    onBoxClick={() => props.onBoxClickIndex(2)}
                    isWinner={winnerCells && winnerCells.includes(2)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 2 ? true : false}
                />
                <Box
                    value={props.cells[3]}
                    onBoxClick={() => props.onBoxClickIndex(3)}
                    isWinner={winnerCells && winnerCells.includes(3)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 3 ? true : false}
                />
                <Box
                    value={props.cells[4]}
                    onBoxClick={() => props.onBoxClickIndex(4)}
                    isWinner={winnerCells && winnerCells.includes(4)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 4 ? true : false}
                />
                <Box
                    value={props.cells[5]}
                    onBoxClick={() => props.onBoxClickIndex(5)}
                    isWinner={winnerCells && winnerCells.includes(5)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 5 ? true : false}
                />
                <Box
                    value={props.cells[6]}
                    onBoxClick={() => props.onBoxClickIndex(6)}
                    isWinner={winnerCells && winnerCells.includes(6)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 6 ? true : false}
                />
                <Box
                    value={props.cells[7]}
                    onBoxClick={() => props.onBoxClickIndex(7)}
                    isWinner={winnerCells && winnerCells.includes(7)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 7 ? true : false}
                />
                <Box
                    value={props.cells[8]}
                    onBoxClick={() => props.onBoxClickIndex(8)}
                    isWinner={winnerCells && winnerCells.includes(8)}
                    colorO={props.colorO} colorX={props.colorX}
                    cells={props.cells}
                    lastWinner={props.lastWinner}
                    isLastCell={props.lastCell === 8 ? true : false}
                />
            </div>
        </>
    )
}
  