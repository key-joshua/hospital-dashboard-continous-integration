import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faGauge, faList, faClipboardUser, faDisplay, faSliders, faGlobe, faHeart, faGear, faDatabase, faLayerGroup, faReceipt, faArrowRight, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      dashboardClicked: true,
      activeDashboardService: 'active-service',
      activeDashboardDropdowns: 'active-dashboard-dropdowns',
      activeAppointmentService: null,
      staffClicked: false,
      activeStaffService: null,
      appsClicked: false,
      activeAppsService: null,
      chartsClicked: false,
      activeChartsService: null,
      bootstrapClicked: false,
      activeBootstrapService: null,
      pluginsClicked: false,
      activePluginsService: null,
      formsClicked: false,
      activeWidgetService: null,
      activeFormsService: null,
      tableClicked: false,
      activeTableService: null,
      pagesClicked: false,
      activePagesService: null,
    };
  }

  onClickDashboard(key) {
    key.preventDefault();
    const { dashboardClicked } = this.state;

    if (dashboardClicked === false) return this.setState({ dashboardClicked: true, activeDashboardDropdowns: 'active-dashboard-dropdowns', activeDashboardService: 'active-service', activeAppointmentService: null, activeStaffService: null, activeAppsService: null, activeChartsService: null, activeBootstrapService: null, activePluginsService: null, activeWidgetService: null, activeFormsService: null, activeTableService: null, activePagesService: null });
    return this.setState({ dashboardClicked: false, activeDashboardDropdowns: null, activeDashboardService: null });
  }

  onClickAppointment(key) {
    key.preventDefault();
    const { activeAppointmentService } = this.state;

    if (activeAppointmentService === null) return this.setState({ activeAppointmentService: 'active-service', activeDashboardService: null, activeStaffService: null, activeAppsService: null, activeChartsService: null, activeBootstrapService: null, activePluginsService: null, activeWidgetService: null, activeFormsService: null, activeTableService: null, activePagesService: null });
    return this.setState({ activeAppointmentService: null });
  }

  onClickStaff(key) {
    key.preventDefault();
    const { staffClicked } = this.state;

    if (staffClicked === false) return this.setState({ staffClicked: true, activeStaffService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeAppsService: null, activeChartsService: null, activeBootstrapService: null, activePluginsService: null, activeWidgetService: null, activeFormsService: null, activeTableService: null, activePagesService: null });
    return this.setState({ staffClicked: false, activeStaffService: null });
  }

  onClickApps(key) {
    key.preventDefault();
    const { appsClicked } = this.state;

    if (appsClicked === false) return this.setState({ appsClicked: true, activeAppsService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeStaffService: null, activeChartsService: null, activeBootstrapService: null, activePluginsService: null, activeWidgetService: null, activeFormsService: null, activeTableService: null, activePagesService: null });
    return this.setState({ appsClicked: false, activeAppsService: null });
  }

  onClickCharts(key) {
    key.preventDefault();
    const { chartsClicked } = this.state;

    if (chartsClicked === false) return this.setState({ chartsClicked: true, activeChartsService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeStaffService: null, activeAppsService: null, activeBootstrapService: null, activePluginsService: null, activeWidgetService: null, activeFormsService: null, activeTableService: null, activePagesService: null });
    return this.setState({ chartsClicked: false, activeChartsService: null });
  }

  onClickBootstrap(key) {
    key.preventDefault();
    const { bootstrapClicked } = this.state;

    if (bootstrapClicked === false) return this.setState({ bootstrapClicked: true, activeBootstrapService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeStaffService: null, activeAppsService: null, activeChartsService: null, activePluginsService: null, activeWidgetService: null, activeFormsService: null, activeTableService: null, activePagesService: null });
    return this.setState({ bootstrapClicked: false, activeBootstrapService: null });
  }

  onClickPlugins(key) {
    key.preventDefault();
    const { pluginsClicked } = this.state;

    if (pluginsClicked === false) return this.setState({ pluginsClicked: true, activePluginsService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeStaffService: null, activeAppsService: null, activeChartsService: null, activeBootstrapService: null, activeWidgetService: null, activeFormsService: null, activeTableService: null, activePagesService: null });
    return this.setState({ pluginsClicked: false, activePluginsService: null });
  }

  onClickWidget(key) {
    key.preventDefault();
    const { activeWidgetService } = this.state;

    if (activeWidgetService === null) return this.setState({ activeWidgetService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeStaffService: null, activeAppsService: null, activeChartsService: null, activeBootstrapService: null, activePluginsService: null, activeFormsService: null, activeTableService: null, activePagesService: null });
    return this.setState({ activeWidgetService: null, });
  }

  onClickForms(key) {
    key.preventDefault();
    const { formsClicked } = this.state;

    if (formsClicked === false) return this.setState({ formsClicked: true, activeFormsService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeStaffService: null, activeAppsService: null, activeChartsService: null, activeBootstrapService: null, activePluginsService: null, activeWidgetService: null, activeTableService: null, activePagesService: null });
    return this.setState({ formsClicked: false, activeFormsService: null });
  }

  onClickTable(key) {
    key.preventDefault();
    const { tableClicked } = this.state;

    if (tableClicked === false) return this.setState({ tableClicked: true, activeTableService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeStaffService: null, activeAppsService: null, activeChartsService: null, activeBootstrapService: null, activePluginsService: null, activeWidgetService: null, activeFormsService: null, activePagesService: null });
    return this.setState({ tableClicked: false, activeTableService: null });
  }

  onClickPages(key) {
    key.preventDefault();
    const { pagesClicked } = this.state;

    if (pagesClicked === false) return this.setState({ pagesClicked: true, activePagesService: 'active-service', activeDashboardService: null, activeAppointmentService: null, activeStaffService: null, activeAppsService: null, activeChartsService: null, activeBootstrapService: null, activePluginsService: null, activeWidgetService: null, activeFormsService: null, activeTableService: null });
    return this.setState({ pagesClicked: false, activePagesService: null });
  }

  render() {
    const { dashboardClicked, activeDashboardService, activeDashboardDropdowns, activeAppointmentService, staffClicked, activeStaffService, appsClicked, activeAppsService, chartsClicked, activeChartsService, bootstrapClicked, activeBootstrapService, pluginsClicked, activePluginsService, activeWidgetService, formsClicked, activeFormsService, tableClicked, activeTableService, pagesClicked, activePagesService } = this.state;
    return (
      <div className="sidebar-container">
        <button type="button" className={`dropdown-btn ${activeDashboardService}`} onClick={(key) => { this.onClickDashboard(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faGauge} />
          Dashboard
          <FontAwesomeIcon className="back-icon" icon={dashboardClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <div className={`dropdown-container ${activeDashboardDropdowns}`}>
          <a href="/" className="dropdown-container-element">Dashboard Light</a>
          <a href="/">Dashboard Dark</a>
          <a href="/">Patient</a>
          <a href="/">Patient Details</a>
          <a href="/">Doctor</a>
          <a href="/">Doctor Details</a>
          <a href="/">Review</a>
        </div>

        <a href="/" className={`a-link ${activeAppointmentService}`} onClick={(key) => { this.onClickAppointment(key); }}> <FontAwesomeIcon className="front-icon" icon={faList} /> Appointment </a>

        <button type="button" className={`dropdown-btn ${activeStaffService}`} onClick={(key) => { this.onClickStaff(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faClipboardUser} />
          Staff
          <FontAwesomeIcon className="back-icon" icon={staffClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <button type="button" className={`dropdown-btn ${activeAppsService}`} onClick={(key) => { this.onClickApps(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faDisplay} />
          Apps
          <FontAwesomeIcon className="back-icon" icon={appsClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <button type="button" className={`dropdown-btn ${activeChartsService}`} onClick={(key) => { this.onClickCharts(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faSliders} />
          Charts
          <FontAwesomeIcon className="back-icon" icon={chartsClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <button type="button" className={`dropdown-btn ${activeBootstrapService}`} onClick={(key) => { this.onClickBootstrap(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faGlobe} />
          Bootstrap
          <FontAwesomeIcon className="back-icon" icon={bootstrapClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <button type="button" className={`dropdown-btn ${activePluginsService}`} onClick={(key) => { this.onClickPlugins(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faHeart} />
          Plugins
          <FontAwesomeIcon className="back-icon" icon={pluginsClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <a href="/" className={`a-link ${activeWidgetService}`} onClick={(key) => { this.onClickWidget(key); }}> <FontAwesomeIcon className="front-icon" icon={faGear} /> Widget </a>

        <button type="button" className={`dropdown-btn ${activeFormsService}`} onClick={(key) => { this.onClickForms(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faReceipt} />
          Forms
          <FontAwesomeIcon className="back-icon" icon={formsClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <button type="button" className={`dropdown-btn ${activeTableService}`} onClick={(key) => { this.onClickTable(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faDatabase} />
          Table
          <FontAwesomeIcon className="back-icon" icon={tableClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <button type="button" className={`dropdown-btn ${activePagesService}`} onClick={(key) => { this.onClickPages(key); }}>
          <FontAwesomeIcon className="front-icon" icon={faLayerGroup} />
          Pages
          <FontAwesomeIcon className="back-icon" icon={pagesClicked === true ? faAngleDown : faAngleRight} />
        </button>

        <div className="sidebar-message">
          <p>Check your job schedule <spa><FontAwesomeIcon className="icon" icon={faCalendarDays} /></spa></p>
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
        </div>

        <div className="sidebar-footer">
          <p>Eres Hospital Admin Dashboard © 2022 All Rights Reserved</p>
          <div>Made with <FontAwesomeIcon className="icon" icon={faHeart} /> by Josue B.</div>
        </div>

      </div>
    );
  }
}

export default Sidebar;
