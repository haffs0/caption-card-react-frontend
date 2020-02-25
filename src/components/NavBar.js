import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaAlignRight } from 'react-icons/fa';
import team from '../images/team.png';


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
          <Link to="/signin">Login</Link>
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
              <img src={team} alt="company logo" />
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
const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps, null)(NavBar);
