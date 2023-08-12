import { useState } from 'react';
import './App.css';
import Square from './components/Square.js';


function Board() {
  
  const [squares, setSquares] = useState(Array(9).fill('null'));
  
  function handleClick(i){
    const nextSquares = squares.slice();
    console.log(nextSquares);
    nextSquares[i] = "x";
    console.log(nextSquares);
    setSquares(prev => nextSquares);
    console.log(squares);
  };

  return (
    <> {/* <> </> tags can be used instead of div*/}
      <div className="board-row">
        <Square value={squares[0]} clickHandler={()=>handleClick(0)} />
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
