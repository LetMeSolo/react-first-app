import React from 'react';
import './App.css';
import Header from './Header/Header';
import UsersCards from './Users/UsersCards';
// import ButtonState from './Buttons/ButtonsState/ButtonState';
// import ButtonProp from './Buttons/ButtonProp/ButtonProp';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <UsersCards/>
    </div>
  );
}

export default App;
