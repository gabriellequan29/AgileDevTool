import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from '../../actions/authAction';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isNavCollapsed: true,
    };
    this.handleNavCollapse = this.handleNavCollapse.bind(this);
  }

  handleNavCollapse() {
    this.setState((prevState) => ({
      isNavCollapsed: !prevState.isNavCollapsed,
    }));
  }

  logout() {
    this.props.logout();
    window.location.href = "/";
  }

  render() {
    const { isValidToken, user } = this.props.auth;

    const userIsAuthenticated = (
      <div
        className={`${
          this.state.isNavCollapsed ? "collapse" : ""
        } navbar-collapse`}
        id="mobile-nav"
      >
        <ul className="navbar-nav mr-auto">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <i className="fas fa-user-circle mr-1" />
              {user.fullName}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/logout"
              onClick={this.logout.bind(this)}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );

    const userIsNotAuthenticated = (
      <div
      className={`${
        this.state.isNavCollapsed ? "collapse" : ""
      } navbar-collapse`}
      id="mobile-nav"
    >
      <ul className="navbar-nav mr-auto">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </ul>
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link " to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
    );

    let headerLinks

    if (isValidToken && user) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Personal Agile Develop Tool
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobile-nav"
            aria-controls="mobile-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.handleNavCollapse}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {headerLinks}
          
        </div>
      </nav>
    );
  }
}
Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
