import React from 'react';
import Die from './Die'
import './App.css';

function App() {
  return (
    <div className="App">
      <Die face="one" />
      <Die face="six" />
      <Die face="five" />
    </div>
  );
}

export default App;
