import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CanvasViz from './CanvasViz';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';
import HeaderTertiary from './HeaderTertiary';
import { connect } from 'react-redux';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <CanvasViz />
        <HeaderPrimary />
        <HeaderSecondary />
        <HeaderTertiary />
      </div>
    );
  }
}

LandingPage.propTypes = {
  showCanvas: PropTypes.bool.isRequired
};

const mapStateToProps = ({showCanvas}) => {
  return {
    showCanvas
  };
};

export default connect(mapStateToProps)(LandingPage);