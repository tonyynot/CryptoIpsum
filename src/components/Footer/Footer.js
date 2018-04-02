import React, { Component } from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import './Footer.css';

class FooterComponent extends Component {
  render() {
    return (
        <div className="footer-container">
          <div className="sub-heading">Created by <a href="https://tonyramella.me">Anthony Ramella</a></div>
          <div>Fork this project on Github <a href="https://github.com/tonyynot/cryptoipsum"><FaGithub className="footer-logo" size={30}/></a></div>
          <p>Donate Bitcoin</p>
        </div>
    );
  }
}

export default FooterComponent;
