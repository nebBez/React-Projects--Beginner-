import './App.css';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo';
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
      <h1>To Do App</h1>
      {toDoList.map(items =>
        <ToDo name={items.name}/>
        )}
      <AddToDo/>
    </div>
  );
}

export default App;
