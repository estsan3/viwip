import React from 'react';
import { connect } from 'react-redux';

import './Loader.css';

const Loader = ({ loader }) =>
  loader.visible ? <div className="loader" /> : null;

const mapStateToProps = state => ({
  loader: state.loader
});

export default connect(mapStateToProps)(Loader);
