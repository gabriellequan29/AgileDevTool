import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class WelcomePage extends Component {

  componentDidMount() {
    console.log(this.props.auth)
    if (this.props.auth.isValidToken) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
        <div className="landing">
          <div className="light-overlay landing-inner text-dark">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">
                    Personal Agile Develop Tool
                  </h1>
                  <p className="lead">
                    Create your account to join active projects or start your own
                  </p>
                  <hr />
                  
                  <Link className="btn btn-lg btn-secondary mr-2" style={{ marginRight: 10 }} to="/register">
                    Sign Up
                  </Link>
                  <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                    Login
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

WelcomePage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(WelcomePage);