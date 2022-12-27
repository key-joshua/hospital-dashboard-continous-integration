import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveContainer, BarChart, ComposedChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Line, Area } from 'recharts';

class ChartCard extends Component {
  constructor() {
    super();
    this.state = {
      revenue: [
        { name: '06', Income: 420, Expenses: 170 },
        { name: '07', Income: 550, Expenses: 850 },
        { name: '08', Income: 850, Expenses: 101 },
        { name: '09', Income: 220, Expenses: 90 },
        { name: '10', Income: 650, Expenses: 250 }
      ],

      stastic: [
        { month: 'January', RecoveredPatient: 500, NewPatient: 250 },
        { month: 'February', RecoveredPatient: 230, NewPatient: 380 },
        { month: 'March', RecoveredPatient: 600, NewPatient: 200 },
        { month: 'April', RecoveredPatient: 360, NewPatient: 300 },
        { month: 'May', RecoveredPatient: 700, NewPatient: 200 },
        { month: 'June', RecoveredPatient: 890, NewPatient: 520 },
        { month: 'Jully', RecoveredPatient: 750, NewPatient: 380 },
        { month: 'August', RecoveredPatient: 420, NewPatient: 770 },
        { month: 'September', RecoveredPatient: 600, NewPatient: 250 },
        { month: 'October', RecoveredPatient: 300, NewPatient: 500 },
        { month: 'November', RecoveredPatient: 420, NewPatient: 300 },
        { month: 'December', RecoveredPatient: 220, NewPatient: 900 }
      ]
    };
  }

  render() {
    const { revenue, stastic } = this.state;

    return (
      <div className="chart-container">

        <div className="revenue-section">
          <div className="title-container">Revenue <span> 2022 <FontAwesomeIcon className="icon" icon={faCaretDown} /> </span></div>
          <div className="sub-title-container">$41,512k <span> $25,612k </span></div>

          <div className="charts-container">
            <ResponsiveContainer width="100%" aspect={1}>
              <BarChart data={revenue}>
                <CartesianGrid vertical={false} stroke="#eaeaea" />
                <XAxis dataKey="name" tickLine={{ stroke: '#d8d7d7' }} style={{ fontSize: '12px' }} />
                <YAxis axisLine={false} tickLine={{ stroke: '#d8d7d7' }} tickCount={6} style={{ fontSize: '12px' }} />
                <Tooltip wrapperStyle={{ outline: 'none' }} />
                <Bar dataKey="Income" fill="#369DC9" radius={[7, 7, 0, 0]} />
                <Bar dataKey="Expenses" fill="#29b952" radius={[7, 7, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bottom-container">
            <span><FontAwesomeIcon className="icon blue" icon={faCircle} />Incone</span>
            <span><FontAwesomeIcon className="icon green" icon={faCircle} />Expenses</span>
          </div>
        </div>

        <div className="stastic-section">
          <div className="title-container">Patient Statistic <span> <a href="/"> Today </a> </span> <span> <a href="/"> Weekly </a> </span> <span className="active"> <a href="/"> Monthly </a> </span> </div>

          <div className="charts-container">
            <ResponsiveContainer width="100%" aspect={1.5}>
              <ComposedChart data={stastic}>
                <CartesianGrid vertical={false} stroke="#eaeaea" />
                <XAxis dataKey="month" interval={0} height={60} angle={-45} textAnchor="end" tickLine={{ stroke: '#d8d7d7' }} style={{ fontSize: '12px' }} />
                <YAxis axisLine={false} tickLine={{ stroke: '#d8d7d7' }} tickCount={6} style={{ fontSize: '12px' }} />
                <Tooltip wrapperStyle={{ outline: 'none' }} />
                <Area dataKey="RecoveredPatient" stroke="#ffffff" fill="#fce3e3" />
                <Line dataKey="RecoveredPatient" stroke="#ef6262" fill="#ef6262" activeDot={{ r: 8 }} />
                <Area dataKey="NewPatient" stroke="#ffffff" fill="#d9f8e2" />
                <Line dataKey="NewPatient" stroke="#29b952" fill="#29b952" activeDot={{ r: 8 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="bottom-container">
            <span><FontAwesomeIcon className="icon red" icon={faCircle} />Recovered Patient</span>
            <span><FontAwesomeIcon className="icon green" icon={faCircle} />New Patient</span>
          </div>
        </div>

      </div>

    );
  }
}

export default ChartCard;
