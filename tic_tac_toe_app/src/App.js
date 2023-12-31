import { useState } from 'react';
import './App.css';
import Square from './components/Square.js';


function Board() {
  
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i){
    if (squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[i] = "x";
    }
    else{
      nextSquares[i] = "o";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = 'Winner: ' + winner;
  }
  else{
    status = 'Next player: '+ (xIsNext?'x':'o');
  }

  return (
    <> {/* <> </> tags can be used instead of div*/}
      
      <h1>Tic Tac Toe Game</h1>
      
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} clickHandler={()=>handleClick(0)} />
        <Square value={squares[1]} clickHandler={()=>handleClick(1)}/>
        <Square value={squares[2]} clickHandler={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} clickHandler={()=>handleClick(3)}/>
        <Square value={squares[4]} clickHandler={()=>handleClick(4)}/>
        <Square value={squares[5]} clickHandler={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} clickHandler={()=>handleClick(6)}/>
        <Square value={squares[7]} clickHandler={()=>handleClick(7)}/>
        <Square value={squares[8]} clickHandler={()=>handleClick(8)}/>
      </div>
    </>  
    );
}

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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
//export makes it exportable
//default means this is the main function in this file
