import React from 'react';
import './App.css';
import Parent from './Parent'

function App() {
let [Number,setNumber] = React.useState(3);

  return (
 <div>
   You are in App
   <Parent num = {Number}></Parent>
   <button onCLick = {()=>{setNumber(++Number) } } >  
    Incrementer
   </button>
  </div>
  );
}

export default App;
