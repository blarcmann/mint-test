import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/stats.scss';

export class Stats extends Component {
  render() {
    return (
      <div className="stats-component">
        <div className="transactions">
          <div className="trans daily">
            <div className="transaction">
              <div className="description">
                <span className="tag">Daily transaction volume</span>
                <div className="value">2,342</div>
              </div>
              <div className="chart">
                <img src={require('../assets/images/transaction-chart.png')} alt="*" />
              </div>
            </div>
            <div className="transaction">
              <div className="description">
                <span className="tag">Daily transaction value</span>
                <div className="value">₦4,000,000</div>
              </div>
              <div className="chart">
                <img src={require('../assets/images/transaction-chart.png')} alt="*" />
              </div>
            </div>
          </div>
          <div className="trans daily">
            <div className="transaction">
              <div className="description">
                <span className="tag">Total transaction volume</span>
                <div className="value">452,000</div>
              </div>
              <div className="chart">
                <img src={require('../assets/images/transaction-chart.png')} alt="*" />
              </div>
            </div>
            <div className="transaction">
              <div className="description">
                <span className="tag">Daily transaction value</span>
                <div className="value">₦4,000,000</div>
              </div>
              <div className="chart">
                <img src={require('../assets/images/transaction-chart.png')} alt="*" />
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
