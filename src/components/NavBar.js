import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';


class NavBar extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  handleToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  renderMenu = () => {
    const { isOpen } = this.state;
    return (
      <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
        <li>
          <Link to="/contribute">contribute</Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h1>Captions Card</h1>
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {this.renderMenu()}
        </div>
      </nav>
    );
  }
}

export default NavBar;
