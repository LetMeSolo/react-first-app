import React from 'react';
import './App.css';
import ButtonState from './Buttons/ButtonsState/ButtonState';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>I'm React application</h1>
      <ButtonState/>
    </div>
  );
}

export default App;
