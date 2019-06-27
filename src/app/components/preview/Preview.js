import React, { Component } from 'react';

import './Preview.css';

export default class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    };
  }

  toggleTooltip = () => {
    this.setState(prevState => {
      return {
        showTooltip: !prevState.showTooltip
      };
    });
  };

  render() {
    const { url, tooltip, showTooltip } = this.props;

    const bgImage = {
      style: {
        backgroundImage: `url("${url}")`
      }
    };

    const tooltipClass = `preview-image-tooltip ${
      this.state.showTooltip ? 'active' : ''
    }`;

    const tooltipIcon = showTooltip ? (
      <span
        title={tooltip}
        tabIndex="-1"
        className={tooltipClass}
        onClick={this.toggleTooltip}
      />
    ) : null;

    return (
      <div className="position-relative preview-image-container text-center">
        <span className="preview-image" {...bgImage} />
        {tooltipIcon}
      </div>
    );
  }
}
