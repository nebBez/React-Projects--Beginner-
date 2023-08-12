import { useState } from 'react';
import './App.css';
import Square from './components/Square.js';

const [squares, setSquares] = useState(Array(9).fill("o"));

function handleClick(i){
  const nextSquares = squares.slice();
  nextSquares[i] = "x";
  setSquares(nextSquares);
}

function Board() {


  return (
    <> {/* <> </> tags can be used instead of div*/}
      <div className="board-row">
        <Square value={squares[0]} clickHandler={handleClick(0)}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
        
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
        
      </div>
    </>  
    );
}

export default Board;
//export makes it exportable
//default means this is the main function in this file
