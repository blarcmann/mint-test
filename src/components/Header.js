import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.scss';

export default function Header() {
    return (
        <div className="header-container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="logo">TransMonitor</div>
                </div>
                <div className="col-lg-10">
                    <div className="header">
                        <div className="header-search">
                            <img src={require('../assets/images/search.png')} alt="*" />
                            <input type="search" placeholder="Search..." name="search" />
                        </div>
                        <div className="header-links">
                            <Link to="/" className="link">Support</Link>
                            <Link to="/" className="link">FAQ</Link>
                        </div>
                        <div className="notification">
                            <img src={require('../assets/images/notification.png')} alt="*" />
                            <span className="badge">8</span>
                        </div>
                        <div className="user">
                            <div className="hello-user">
                                <span>Hello,</span>
                                <Link className="username" to="/">Oluwaleke Ojo</Link>
                            </div>
                            <div className="user-img">
                                <img src={require('../assets/images/user.png')} alt="*" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

