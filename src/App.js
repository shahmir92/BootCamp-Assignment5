import React from 'react';
import './App.css';
import Parent from './Parent'
import ValueContext from './ValueContext'



function App() {
  let value = 81;
  return (
<ValueContext.Provider value = {value}>
  <div>
    Hello World from App.js
    <Parent/>
  </div>
</ValueContext.Provider>
  );
}

export default App;
