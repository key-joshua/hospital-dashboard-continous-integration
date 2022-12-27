/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Logo from '../../../assets/images/logo.png';
import Rejectmarka from '../../../assets/images/rejectmarka.png';

class InstallPage extends Component {
  componentDidMount() {
    let deferredPrompt;
    const closeBtn = document.querySelector('.close-icon');
    const addBtn = document.querySelector('.add-home-btn');
    const prompWindow = document.querySelector('.add-home-window');

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;

      let x = 0;
      let displayTime;
      prompWindow.style.display = 'block';

      function Visible() {
        if (x === 1) clearInterval(displayTime);
        x += 0.01;
        prompWindow.style.opacity = x;
        prompWindow.style.filter = `alpha(opacity=${x * 100})`;
      }

      displayTime = setInterval(Visible, 25);

      setTimeout(() => {
        prompWindow.style.display = 'none';
      }, 10000);
    });

    addBtn.addEventListener('click', () => {
      prompWindow.style.display = 'none';
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    });

    const hideAddHomeWindow = () => {
      prompWindow.style.display = 'none';
    };

    closeBtn.addEventListener('click', () => { hideAddHomeWindow(); });
  }

  render() {
    return (

      <div className="add-home-window">

        <div className="content">

          <div className="header">
            <h2>Install Me Into Device</h2>
            <img src={Rejectmarka} alt="close" className="close-icon" />
          </div>

          <div className="body">
            <img src={Logo} alt="close" className="logo-icon" />
            <p>Install the application is compatible with your device</p>
          </div>

          <div className="line" />

          <div htmlFor="click" className="add-btn">
            <button type="submit" className="add-home-btn">Install Me</button>
          </div>

        </div>

      </div>

    );
  }
}

export default InstallPage;
