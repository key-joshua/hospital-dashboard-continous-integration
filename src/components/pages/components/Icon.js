import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faGear, faShare, faHeadset } from '@fortawesome/free-solid-svg-icons';

class Icon extends Component {
  render() {
    return (
      <div className="icon-container">
        <div className="icon-one"><FontAwesomeIcon className="icon" icon={faDroplet} /></div>
        <div className="icon-two"><FontAwesomeIcon className="icon" icon={faGear} /></div>

        <div className="icon-three"><FontAwesomeIcon className="icon" icon={faShare} /></div>
        <div className="icon-four"><FontAwesomeIcon className="icon" icon={faHeadset} /></div>
      </div>
    );
  }
}

export default Icon;
