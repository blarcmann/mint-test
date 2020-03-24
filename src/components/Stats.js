import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/stats.scss';

export class Stats extends Component {
  state = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  }
  render() {
    const { months } = this.state;
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
        <section className="main-chart">
          <div className="chart">
            <header className="header">
              <h2 className="title">Today: 5, Aug 2018</h2>
              <div className="filter">
                <select name="dateFilter">
                  <option value="0">1 Jan - 1 Jun</option>
                  <option value="1">2 Jun - 31 Dec</option>
                </select>
                <div className="fw-bk">
                  <button>
                    <img src={require('../assets/images/left-arrow.png')} alt="" />
                  </button>
                  <button>
                    <img src={require('../assets/images/right-arrow.png')} alt="" />
                  </button>
                </div>
              </div>
            </header>
            <div className="months">
              {months.map(month => (
                <div className="month" key={month}>{month}</div>
              ))}
            </div>
            <div className="cr">
              <img src={require('../assets/images/main-chart.png')} alt="chart" />
            </div>
          </div>
          <div className="breakdown">
            <div className="each">
              <h4 className="title">Orders</h4>
              <div className="range">
                <div className="data" style={{ width: '80%' }}></div>
              </div>
              <div className="stats">
                <div className="tag">Pending Orders: </div>
                <div className="value yellow">20</div>
              </div>
              <div className="stats">
                <div className="tag">Reconcilled Orders: </div>
                <div className="value green">80</div>
              </div>
              <div className="stats">
                <div className="tag">Total Orders: </div>
                <div className="value blue">100</div>
              </div>
            </div>
            <div className="each">
              <h4 className="title">Payments</h4>
              <div className="range">
                <div className="data" style={{ width: '80%' }}></div>
              </div>
              <div className="stats">
                <div className="tag">Pending Payments: </div>
                <div className="value yellow">20</div>
              </div>
              <div className="stats">
                <div className="tag">Reconcilled Payments: </div>
                <div className="value green">80</div>
              </div>
              <div className="stats">
                <div className="tag">Total Payments: </div>
                <div className="value blue">100</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
