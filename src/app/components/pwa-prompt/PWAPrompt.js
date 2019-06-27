import React, { Component } from 'react';

import './PWAPrompt.css';

const BEFORE_INSTALL_PROMPT = 'beforeinstallprompt';

export default class PWAPrompt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentWillMount() {
    window.addEventListener(
      BEFORE_INSTALL_PROMPT,
      this.handleBeforeInstallPropmpt
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      BEFORE_INSTALL_PROMPT,
      this.handleBeforeInstallPropmpt
    );
  }

  handleBeforeInstallPropmpt = event => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();

    // Stash the event so it can be triggered later.
    this.setState({
      deferredPrompt: event,
      visible: true
    });
  };

  handleYesClick = () => {
    // hide our user interface that shows our A2HS button
    this.setState({ visible: false });

    const deferredPrompt = this.state.deferredPrompt;

    if (!deferredPrompt) {
      return;
    }

    // Show the prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }

      this.setState({ deferredPrompt: null });
    });
  };

  handleNoClick = () => {
    this.setState({
      visible: false,
      deferredPrompt: null
    });
  };

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className="pwa-prompt">
        <div className="text-center">
          <div className="container">
            <div className="row">
              <div className="col text-white">
                <h4>Add app to the home screen?</h4>
              </div>
            </div>
            <div className="row">
              <div className="col text-white">
                <button
                  className="btn btn-success mr-3"
                  onClick={this.handleYesClick}
                >
                  Yes
                </button>
                <button
                  className="btn btn-warning"
                  onClick={this.handleNoClick}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
