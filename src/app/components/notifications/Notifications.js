import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notifications from 'react-notification-system-redux';

class AppNotifications extends Component {
  render() {
    const { notifications } = this.props;

    return <Notifications notifications={notifications} />;
  }
}

const mapStatesToProps = state => ({ notifications: state.notifications });

export default connect(mapStatesToProps)(AppNotifications);
