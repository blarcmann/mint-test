import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
