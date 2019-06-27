import React, { Component } from "react";
import { connect } from 'react-redux';
class ImagesFormatter extends Component {

  render() {
    const bgImage = {
      style: {
        backgroundImage: `url("${this.props.row.url}")`
      }
    };
    /*
      <div className="position-relative preview-image-container text-center">
        <span className="preview-image" {...bgImage} />
        <span>{this.props.row.name}</span>
      </div>
    
    
    * */
    return (
      <div className="position-relative preview-image-container text-center">
      <span className="preview-image" {...bgImage} />
      <span className="title">{this.props.row.name}</span>
    </div>
    
    );
  }
}

export default connect(null, null)(ImagesFormatter);