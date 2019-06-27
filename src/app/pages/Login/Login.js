import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.css";
import UserApi from "../../apis/userApi";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    UserApi.login(this.state.email, this.state.password)
      .then(response => {
        this.props.onLogin(true);
      })
      .catch(error => {
        this.props.onLogin(false);
      });
  };

  render = () => {
    return (
      <div className="container">
        <form>
          <div className="row">
            <div className="col s12 m6 offset-6">
              <div className="card">
                <div className="card-action  teal lighten-1 white-text">
                  <h3>Login</h3>
                </div>
                <div className="card-content">
                  <div className="form-field">
                    <label htmlFor="email">Usuario</label>
                    <input
                      type="text"
                      id="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <button
                      className="btn-large waves-effect waves-dark"
                      type="button"
                      onClick={this.handleSubmit}
                      disabled={!this.validateForm}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: result => {
      dispatch({
        type: "SET_LOGIN",
        payload: true
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
