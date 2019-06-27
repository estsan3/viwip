import React, { Component } from "react";
import Navbar from "./navbar";
import AppNotifications from "./notifications";
import { connect } from "react-redux";
import Modal from "./modal";
import Loader from "./loader";

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="app-header">
          <div >
              <button onClick={this.props.onLogout}>logout</button>
          </div>
          <Navbar />
          <AppNotifications />
          <Modal />
          <Loader />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.app.isSignedIn
});

const mapDispatchToProps = dispatch => ({
  onLogin: () => {
    dispatch({
      type: "SET_LOGIN",
      payload: true
    });
  },
  onLogout: () => {
    dispatch({
      type: "SET_LOGIN",
      payload: false
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
