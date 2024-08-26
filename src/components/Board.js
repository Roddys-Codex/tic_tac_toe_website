import { Square } from "./index";
import { PropTypes } from "../utils/index";

export default function Board({ xIsNext, squares, onPlay}) {
    
    const winner = calculateWinner(squares);

    let status;

    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    
    function handleClick(i) {
        
        if(squares[i] || calculateWinner(squares)) {
            return;
        } 

        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        
        onPlay(nextSquares);
    }

    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClicked={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClicked={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClicked={() => handleClick(2)} />
        </div>
  
        <div className="board-row">
          <Square value={squares[3]} onSquareClicked={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClicked={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClicked={() => handleClick(5)} />
        </div>
  
        <div className="board-row">
          <Square value={squares[6]} onSquareClicked={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClicked={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClicked={() => handleClick(8)} />
        </div>
      </>
    );
}

Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  onPlay: PropTypes.func.isRequired,
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(const element of lines) {
        const [a, b, c] = element;

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        } 
    }

    return null;
}
