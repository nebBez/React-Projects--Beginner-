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

  const addListHandler = enteredToDo =>{
    addList(prevList =>{
      const updatedList = [...prevList];
      updatedList.unshift({name: enteredToDo, id: Math.random().toString() });
      return updatedList;
    });
  }

  return (
    <div className="App">
      <h1>To Do App</h1>
      {toDoList.map(items =>
        <ToDo name={items.name}/>
        )}
      <AddToDo onAddHandler={addListHandler}/>

    </div>
  );
}

export default App;
