import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar-component">
      <button className="generate">generate invoice</button>
      <div className="nav-section">
        <div className="section-title">Main</div>
        <div className="section-items">
          <div className="nav-item active">
            <img src={require('../assets/images/overview.png')} alt="*" />
            <Link to="/">Overview</Link>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <div className="section-title">Payments</div>
        <div className="section-items">
          <div className="nav-item">
            <img src={require('../assets/images/all-payments.png')} alt="*" />
            <Link to="/">All payments</Link>
          </div>
          <div className="nav-item">
            <img src={require('../assets/images/reconciled-payments.png')} alt="*" />
            <Link to="/">Reconciled payments</Link>
          </div>
          <div className="nav-item">
            <img src={require('../assets/images/unreconciled-payments.png')} alt="*" />
            <Link to="/">Un-reconciled payments</Link>
          </div>
          <div className="nav-item">
            <img src={require('../assets/images/mutual-settlement.png')} alt="*" />
            <Link to="/">Manual settlement</Link>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <div className="section-title">Orders</div>
        <div className="section-items">
          <div className="nav-item">
            <img src={require('../assets/images/all-orders.png')} alt="*" />
            <Link to="/">All orders</Link>
          </div>
          <div className="nav-item">
            <img src={require('../assets/images/pending-orders.png')} alt="*" />
            <Link to="/">Pending orders</Link>
          </div>
          <div className="nav-item">
            <img src={require('../assets/images/reconciled-orders.png')} alt="*" />
            <Link to="/">Reconciled orders</Link>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <div className="profile nav-item">
          <img src={require('../assets/images/merchant-profile.png')} alt="*" />
          <Link to="/">Merchant profile</Link>
        </div>
      </div>
    </div>
  )
}
