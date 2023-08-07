import './App.css';
import ToDo from './components/ToDo.js';
import {useState} from 'react';

function App() {
  const [toDoList, addList] = useState(
  [
    {name: "go Boxing", id: "g1"},
    {name: "go Swimming", id: "g1"}
  ]
  );

  return (
    <div className="App">
      -set up to do props
      <h1>To Do App</h1>

      <ToDo items={toDoList}/>
      -pass props to to doo component
        -use map/filler
    </div>
  );
}

export default App;
