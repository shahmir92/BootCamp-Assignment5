import React, { useContext , useReducer} from 'react';
import numberReducer from './numberReducer';

function Child2(){
    let [state , dispatch] = useReducer(numberReducer,35);
    return(
        <div>
            Child2 {state}

        <button onClick = { () => {dispatch({type:"INCREMENT"});}} >
            Increment
        </button>
        
        <button onClick = { () => {dispatch({type:"DECREMENT"});}} >
            Decrement
        </button>
        </div>
    )
}

export default Child2; 