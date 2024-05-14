import './App.css';

import { useState } from 'react';

import Score from './Score.jsx';
import Grid from './Grid.jsx';
import Infos from './Infos.jsx';
import { nextPlayer, calculateWinner } from './utils.js';

export default function App() {
  const colorO = '#17A2B8';
  const colorX = '#FFC107';

  const [scoreO, setScoreO] = useState(0);
  const [scoreEquality, setScoreEquality] = useState(0);
  const [scoreX, setScoreX] = useState(0);
  const [lastWinner, setLastWinner] = useState();
  const [lastCell, setLastCell] = useState();

  const [cells, setCells] = useState([
    null,null,null,
    null,null,null,
    null,null,null
  ]);

  const handleClick = (index) => {
    if(cells[index] !== null) {
      return;
    }

    const winner = calculateWinner(cells);
    if(!winner){
      setLastCell(index);

      const cellsNew = cells.slice();
      
      cellsNew[index] = nextPlayer(cellsNew, lastWinner);
      setCells(cellsNew);
      const newWinner = calculateWinner(cellsNew);
      if(newWinner === 'O'){
        setScoreO(scoreO + 1);
        setLastWinner('O');
      } else if(newWinner === 'X') {
        setScoreX(scoreX + 1);
        setLastWinner('X');
      } else if(!cellsNew.includes(null)) {
        setScoreEquality(scoreEquality + 1);
      }
    }
  }

  const handleRestart = () => {
    const cellsNew = [
      null,null,null,
      null,null,null,
      null,null,null
    ]
    setCells(cellsNew);
};

  return (
    <>
      <h1>Morpion</h1>
      <Score colorO={colorO} colorX={colorX} scoreO={scoreO} scoreEquality={scoreEquality} scoreX={scoreX}/>
      <Grid cells={cells} onBoxClickIndex={handleClick} colorO={colorO} colorX={colorX} lastWinner={lastWinner} lastCell={lastCell}/>
      <Infos cells={cells} onRestart={handleRestart} lastWinner={lastWinner} colorO={colorO} colorX={colorX}/>
    </>
  )
}
