

function ToDo(props){
    return(
        
        <div className="ToDo">
            <ul>
                <input type="checkbox"/>
                {props.name}
                //pass a prop up so you can delete it from main list (add delete button)
            </ul>
        </div>
    );
}
export default ToDo;