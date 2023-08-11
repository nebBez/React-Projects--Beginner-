import './App.css';
import Square from './components/Square.js';



function Board() {
  return (
    <> {/* <> </> tags can be used instead of div*/}
      <div className="board-row">
        <Square value={2}/>
        <Square value={2}/>
        <Square value={3}/>
      </div>
      <div className="board-row">
        <Square value={4}/>
        <Square value={5}/>
        <Square value={6}/>
        
      </div>
      <div className="board-row">
        <Square value={7}/>
        <Square value={8}/>
        <Square value={9}/>
        
      </div>
    </>  
    );
}

export default Board;
//export makes it exportable
//default means this is the main function in this file
