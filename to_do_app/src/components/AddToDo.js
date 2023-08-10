import { useState } from "react";


function AddToDo(props){

    const [toDoItem, setToDo] = useState('');

    const inputHandler = event =>{
        event.preventDefault();
        setToDo(event.target.value);
    };

    const formHandler = event =>{
        event.preventDefault();
        props.onAddHandler(toDoItem);
    };

    return(
        <div className="AddToDo">
            <form onSubmit={formHandler}>
                <input
                    type="text"
                    placeholder="Add to list..."
                    onChange={inputHandler}
                />
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddToDo;