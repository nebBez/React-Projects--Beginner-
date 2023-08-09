

function ToDo(props){
    return(
        
        <div className="ToDo">
            <ul>
                <input type="checkbox"/>
                {props.name}
            </ul>
        </div>
    );
}
export default ToDo;