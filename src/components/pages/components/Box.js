import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHeartPulse, faStethoscope, faCalendarDays, faDollarSign } from '@fortawesome/free-solid-svg-icons';

class Box extends Component {
  render() {
    return (
      <div className="box-container">

        <div className="box-section red-box">
          <div className="box-desc">
            <div>Total Patient</div>
            <div><span className="number">783k</span> <FontAwesomeIcon className="icon" icon={faBolt} /></div>
            <span className="badge">+4%</span>
          </div>

          <div className="box-icon">
            <FontAwesomeIcon className="icon" icon={faHeartPulse} />
          </div>
        </div>

        <div className="box-section green-box">
          <div className="box-desc">
            <div>Doctor</div>
            <div><span className="number">76</span> <FontAwesomeIcon className="icon" icon={faBolt} /></div>
            <span className="badge">-4%</span>
          </div>

          <div className="box-icon">
            <FontAwesomeIcon className="icon" icon={faStethoscope} />
          </div>
        </div>

        <div className="box-section blue-box">
          <div className="box-desc">
            <div>Appointment</div>
            <div><span className="number">76</span> <FontAwesomeIcon className="icon" icon={faBolt} /></div>
            <span className="badge">-4%</span>
          </div>

          <div className="box-icon">
            <FontAwesomeIcon className="icon" icon={faCalendarDays} />
          </div>
        </div>

        <div className="box-section pupple-box">
          <div className="box-desc">
            <div>Hospital Earnings</div>
            <div><span className="number">56k</span> <FontAwesomeIcon className="icon" icon={faBolt} /></div>
            <span className="badge">+4%</span>
          </div>

          <div className="box-icon">
            <FontAwesomeIcon className="icon" icon={faDollarSign} />
          </div>
        </div>

      </div>

    );
  }
}

export default Box;
