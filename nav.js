import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const nav = (props) => {
  return <div></div>;
};

nav.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(nav);
