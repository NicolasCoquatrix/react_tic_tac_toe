export function calculateWinner(cells) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a];
        }
    }
    return null;
}

export function calculateWinnersCells(cells) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return lines[i];
        }
    }
    return null;
}
  
export function nextPlayer(cells, lastWinner) {
    const nbNull = cells.filter(cell => cell === null).length;
    if(lastWinner === 'O'){
        return nbNull % 2 === 0 ? 'X' : 'O';
    } else {
        return nbNull % 2 === 0 ? 'O' : 'X';
    }
}