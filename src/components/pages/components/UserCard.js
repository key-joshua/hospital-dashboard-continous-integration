import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAnglesRight, faCaretRight, faCaretLeft, faStar } from '@fortawesome/free-solid-svg-icons';

import img1 from '../../../assets/images/image-one.png';
import img2 from '../../../assets/images/image-two.png';
import img6 from '../../../assets/images/image-six.png';
import img4 from '../../../assets/images/image-four.png';
import img5 from '../../../assets/images/image-five.png';
import img7 from '../../../assets/images/image-seven.png';
import img3 from '../../../assets/images/image-three.png';

class UserCard extends Component {
  render() {
    return (
      <div className="user-container">

        <div className="doctor-section">
          <div className="title-container">Top Rated Doctors <span> <a href="/"> View more </a> <FontAwesomeIcon className="icon" icon={faAnglesRight} /> </span></div>

          <div className="des-container">

            <div className="user-datails">
              <img src={img1} alt="profile" />
              <div className="bottom-center"><FontAwesomeIcon className="star-icon" icon={faStar} /> 4.2</div>

              <div className="name">Dr. Alexandro Jr.</div>
              <div className="career">Dentist</div>
              <div className="desc">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</div>
              <div>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </div>
            </div>

            <div className="user-datails">
              <img src={img2} alt="profile" />
              <div className="bottom-center"><FontAwesomeIcon className="star-icon" icon={faStar} /> 4.2</div>

              <div className="name">Dr. Samantha</div>
              <div className="career">Physical Therapy</div>
              <div className="desc">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</div>
              <div>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </div>
            </div>

            <div className="user-datails">
              <img src={img3} alt="profile" />
              <div className="bottom-center"><FontAwesomeIcon className="star-icon" icon={faStar} /> 4.2</div>

              <div className="name">Dr. Aliandro M</div>
              <div className="career">Nursing</div>
              <div className="desc">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</div>
              <div>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </div>
            </div>

          </div>

          <span className="previous"><FontAwesomeIcon className="icon" icon={faCaretLeft} /></span>
          <span className="next"><FontAwesomeIcon className="icon" icon={faCaretRight} /></span>
        </div>

        <div className="patient-section">
          <div className="title-container">Recent Patient <span> <a href="/"> View more </a> <FontAwesomeIcon className="icon" icon={faAnglesRight} /> </span></div>

          <div className="des-container">
            <div className="user-datails">
              <div className="profile-details">
                <img src={img4} alt="profile" />
                <div className="info">
                  <div className="name">Aziz Bakree</div>
                  <div className="age">24 Years</div>
                </div>
              </div>
              <div className="status yellow">Pending</div>
            </div>

            <div className="user-datails">
              <div className="profile-details">
                <img src={img5} alt="profile" />
                <div className="info">
                  <div className="name">Griezerman</div>
                  <div className="age">24 Years</div>
                </div>
              </div>
              <div className="status blue">On Recovery</div>
            </div>

            <div className="user-datails">
              <div className="profile-details">
                <img src={img6} alt="profile" />
                <div className="info">
                  <div className="name">Oconner</div>
                  <div className="age">24 Years</div>
                </div>
              </div>
              <div className="status red">Rejected</div>
            </div>

            <div className="user-datails">
              <div className="profile-details">
                <img src={img7} alt="profile" />
                <div className="info">
                  <div className="name">Oconner</div>
                  <div className="age">24 Years</div>
                </div>
              </div>
              <div className="status green">Recovered</div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default UserCard;
