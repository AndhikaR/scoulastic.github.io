import React from 'react';
import './header.css';

export class Header extends React.Component {
	render () {
		return (
			<header className="main-header">
                <div className="left-header-content">
                    <img src="" alt="" className="header-logo"/>
                </div>
                <div className="right-header-content">
                    <ul className="header-menu">
                        <li className="header-menu-item"><a href="" className="header-menu-link">About Us</a></li>
                        <li className="header-menu-item"><a href="" className="header-menu-link">News</a></li>
                        <li className="header-menu-item"><a href="" className="header-menu-link">Gallery</a></li>
                    </ul>
                </div>
            </header>
		)
	}
}