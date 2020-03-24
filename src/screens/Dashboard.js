import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Stats from '../components/Stats';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="cover">
          <div className="side">
            <Sidebar />
          </div>
          <div className="main-content">
            <Stats />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
