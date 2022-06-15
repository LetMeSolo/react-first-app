import React from 'react';
import './App.css';
import ButtonState from './Buttons/ButtonsState/ButtonState';
import Header from './Header/Header';
import ButtonProp from './Buttons/ButtonProp/ButtonProp';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <h1>Im React App</h1>
      <ButtonState/>
      <ButtonProp text='Creat new app' />
    </div>
  );
}

export default App;
