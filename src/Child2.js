import React, { useReducer } from 'react';
import numberReducer from './numberReducer';

function Child() {
    let [state,dispatch] = useReducer(numberReducer);
    return (
        <div>
        Hello You're in Child 2 {state}
        <button onClick = {() => {dispatch({type: "increment"}) }}>
            Increment
        </button>

        <button onClick = {() => {dispatch({type: "decrement"}) }}>
            Decrement
        </button>
        </div>
    );
}
 export default Child;
