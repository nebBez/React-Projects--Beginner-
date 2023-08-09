

function ToDo(props){
    return(
        
        <div className="ToDo">
            <ul>
                <input type="checkbox"/>
                {props.item}
            </ul>
        </div>
    );
}
export default ToDo;