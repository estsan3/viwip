import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppFrame from "../AppFrame";


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  handleOnClick = () => {
    console.log("ADDIMAGES");
    this.props.history.push("/AddImages");
  };
  render() {
    return (
      <div>
        <AppFrame
          header="homeApp"
          body={this.props.component}
          
        />
      </div>
    );
  }
}

export default withRouter(Dashboard);
