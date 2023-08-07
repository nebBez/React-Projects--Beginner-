

function ToDo(props){
    return(
        
        <div className="ToDo">
            <ul>
                <li>
                {props.items.map(todo =>(
                    todo.name
                ))}
                </li>
                
            </ul>
        </div>
    );
}
export default ToDo;