import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

import Dashboard from "../components/dashboard";
import { connect } from "react-redux";
import "../index.css";
import "materialize-css/dist/css/materialize.min.css";
import "material-colors/dist/colors.css";
import { Login } from "./Login";

import { Images, Image } from "../pages/Images";
import { GridDevices } from "../pages/GridDevices";
import { UploadAssets } from "../pages/UploadAssets";

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderDashboard = () => (
    <div>
      <Dashboard />
    </div>
  );

  renderImages = () => (
    <div>
      <Dashboard component={<Images />} />
    </div>
  );
  renderNewImages = () => (
    <div>
      <Dashboard component={<Image />} />
    </div>
  );
  renderGridDevices = () => (
    <div>
      <Dashboard component={<GridDevices />} />
    </div>
  );

  renderUploadAssets = () => (
    <div>
      <Dashboard component={<UploadAssets />} />
    </div>
  );

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            isSignedIn={this.props.isSignedIn}
            component={this.renderDashboard}
            key={"dashboard"}
          />
          <PrivateRoute
            exact
            path="/Images"
            isSignedIn={this.props.isSignedIn}
            component={this.renderImages}
            key={"Images"}
          />
          <PrivateRoute
            exact
            path="/addAssets"
            isSignedIn={this.props.isSignedIn}
            component={this.renderNewImages}
            key={"imageNew"}
          />
          <PrivateRoute
            exact
            path="/GridDevices"
            isSignedIn={this.props.isSignedIn}
            component={this.renderGridDevices}
            key={"gridDevices"}
          />
          <PrivateRoute
            exact
            path="/UploadAssets"
            isSignedIn={this.props.isSignedIn}
            component={this.renderUploadAssets}
            key={"uploadAssets"}
          />
        </Switch>
      </Router>
    );
  }
}

const PrivateRoute = ({ isSignedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return isSignedIn ? <Component {...props} /> : <Login />;
    }}
  />
);
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
)(App);
