import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <span className="logo">REACT-APP.TSX</span>

        <ul className="list_menu">
          <li>Main</li>
          <li>About Us</li>
          <li>Contacts</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;