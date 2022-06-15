import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <p className="logo">REACT-APP.TSX</p>

        <ul className="list_menu">
          <li>Пункт 1</li>
          <li>Пункт 2</li>
          <li>Пункт 3</li>
          <li>Пункт 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;