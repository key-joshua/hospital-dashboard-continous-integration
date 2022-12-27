import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGear } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-section">
          <div className="title">Welcome to Eres!</div>
          <div className="title-desc">Hospital Admin Dashboard Template</div>
        </div>

        <div className="search-section">

          <div className="input-section">
            <input type="text" placeholder="Search here" />
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          </div>
          <span> <FontAwesomeIcon className="icon" icon={faGear} /></span>

        </div>

      </div>

    );
  }
}

export default Header;
