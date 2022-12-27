import React, { Component } from 'react';

import Box from './components/Box';
import Icon from './components/Icon';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import UserCard from './components/UserCard';
import ChartCard from './components/ChartCard';
import InstallMe from './components/InstallMe';

class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <InstallMe />
        <Navbar />
        <Sidebar />

        <div className="dashboard-container">
          <Header />
          <Icon />
          <Box />
          <ChartCard />
          <UserCard />
          <Footer />
        </div>

      </div>

    );
  }
}

export default DashboardPage;
