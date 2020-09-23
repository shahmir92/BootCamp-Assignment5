import React from 'react';
import './App.css';
import Parent from './Parent'
import ValueContext from './ValueContext';

function App() {
let value = 21;
  return (
  <ValueContext.Provider value = {value}>
 <div>
   You are in App
   <Parent/>
   </div>
  </ValueContext.Provider>
  );
}

export default App;
