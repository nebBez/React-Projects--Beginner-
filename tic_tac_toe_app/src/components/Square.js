import {useState} from 'react';


function Square({value, clickHandler}){

    const [val, changeVal] = useState(value);

    return(
        <>
        <button className="square"
        onClick={clickHandler}>{val}
        </button>
        </>
    );
}

export default Square;