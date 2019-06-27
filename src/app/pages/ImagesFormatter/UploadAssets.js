import React, { Component } from "react";
import { connect } from 'react-redux';

class UploadAssets extends Component {

  
  render() {
    return (
      
      <div>
        UPLOAD ASSETS TO AWS
       
      </div>
    );
  }
}


const mapStateToProps = state => ({
});


export default connect(mapStateToProps, null)(UploadAssets);