import React, { useState } from 'react';
import './ButtonState.css';

const ButtonState = () => {
  const [text, setText] = useState('Click me!');
  return (
    <button className="btn btn-primary" type="submit" onClick={() => setText('Thank you!')}>{text}</button>
  );
};

export default ButtonState;