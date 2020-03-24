import React, { Component } from 'react';
import { connect } from 'react-redux';
import { payments } from '../constants/mock';
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
        <section className="payments">
          <h2 className="title">Payments</h2>
          <div className="filter-format">
            <div className="filter-number">
              <span>Showing</span>
              <select>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span>out of 500 payments</span>
            </div>
            <div className="search">
              <img src={require('../assets/images/search.png')} alt="*" />
              <input type="search" placeholder="Search payments" className="search-payments" />
            </div>
            <div className="filter-type">
              <span>Showing</span>
              <select>
                <option value="All">All</option>
                <option value="Reconcilled">Reconcilled</option>
                <option value="Un-reconcilled">Un-reconcilled</option>
                <option value="Settled">Settled</option>
                <option value="Unsettled">Unsettled</option>
              </select>
            </div>
          </div>
          <div className="payments-list">
            <table className="list-table">
              <thead>
                <tr>
                  <th>Item Type</th>
                  <th>Price</th>
                  <th>Transaction No</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr className="each-row">
                    <td className="type" key={index}>
                      <img src={require('../assets/images/payment.png')} alt="" />
                      <span>{payment.item}</span>
                    </td>
                    <td>{payment.price}</td>
                    <td>{payment.transactionNo}</td>
                    <td>{payment.time}</td>
                    <td className="action">
                      <button className={`status ${payment.status}`}>
                        <span className={`${payment.status}`}></span>
                        <span className="tile">{payment.status}</span>
                      </button>
                      <img src={require('../assets/images/down-arrow.png')} alt="" />
                    </td>
                  </tr>
                ))}
                <tr className="each-row">
                  <td className="type">
                    <img src={require('../assets/images/payment.png')} alt="" />
                    <span>Apple Mac Book 15” 250 SSD 12GB</span>
                  </td>
                  <td>$73430</td>
                  <td>12345687437890</td>
                  <td>12:30</td>
                  <td className="action">
                    <button className="status pending">
                      <span className="pending"></span>
                      <span className="tile">Uncontrolled</span>
                    </button>
                    <img src={require('../assets/images/down-arrow.png')} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="navigation">
            <div className="stat">Showing 1 to 10 of 500 entries</div>
            <div className="navs">
              <button>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>Next</button>
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
