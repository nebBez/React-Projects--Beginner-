

function ToDo(props){
    const deleteHandler = event =>{
        event.preventDefault();
        props.onDeleteClick(props.name);
    }
    return(
        
        <div className="ToDo">
            <ul>
                <input type="checkbox"/>
                {props.name}
                <button onClick={deleteHandler}>Delete</button>
            </ul>
        </div>
    );
}
export default ToDo;