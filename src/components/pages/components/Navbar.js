import React, { Component } from 'react';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons';

import logo from '../../../assets/images/logo.png';
import josue from '../../../assets/images/josue.png';

class Navbar extends Component {
  render() {
    return (
      <header className="navbar-container">

        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <h1>ERES</h1>
        </div>

        <div className="title-container"> <div className="icon" /> Dashboard</div>

        <div className="profile-container">

          <a href="/" className="notification"> <span><FontAwesomeIcon className="user-picture" icon={faBell} /></span> <span className="badge">12</span> </a>
          <a href="/" className="notification"> <span><FontAwesomeIcon className="user-picture" icon={faMessage} /></span> <span className="badge">5</span> </a>
          <a href="/" className="notification gift"> <span><FontAwesomeIcon className="user-picture" icon={faGift} /></span> <span className="badge">20</span> </a>

          <div className="avatar-container">
            <img src={josue} alt="profile" />
            <span className="name">Hello, <span>Josue B .</span></span>
          </div>

        </div>

      </header>
    );
  }
}

export default Navbar;
