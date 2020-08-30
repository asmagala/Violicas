import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Products } from '../../features/Products/Products';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import Container from '@material-ui/core/Container';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Container maxWidth='lg'>
      <h2>Homepage - Violin Replicas For Fiddlers ;)</h2>
      {/*<img src={"/images/i103-0.jpg"} alt="k.jpg" />*/}
      <Products />
    </Container>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
