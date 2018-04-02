import React, { Component } from 'react';
import FaBitcoin from 'react-icons/lib/fa/bitcoin';
import './Header.css';

class HeaderComponent extends Component {
  render() {
    return (
        <div className="header-container">
          <span className="main-header">Crypto Ipsum</span><br></br>
          <span className="header-logo-container"><FaBitcoin className="header-logo" size={30}/></span><br></br>
          <span className="sub-heading">A Lorem Ipsum text generator for Blockchain nerds.</span>
        </div>
    );
  }
}

export default HeaderComponent;
