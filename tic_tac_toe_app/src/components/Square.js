import {useState} from 'react';

function Square(prop){

    const [val, changeVal] = useState(prop.value);
    
    const clickHandler=()=>{
        changeVal("x");
    };

    return(
        <>
        <button className="square"
        onClick={clickHandler}>{val}
        </button>
        </>
    );
}

export default Square;