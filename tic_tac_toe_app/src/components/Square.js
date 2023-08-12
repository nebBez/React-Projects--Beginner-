import {useState} from 'react';


function Square(props){

    return(
        <>
        <button className="square"
        onClick={props.clickHandler}>{props.value}
        </button>
        </>
    );

}

export default Square;