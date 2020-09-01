import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import styles from './Header.module.scss';

import { UpperStripe } from '../UpperStripe/UpperStripe';

//import { connect } from 'react-redux';
//import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <UpperStripe />
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Button color="inherit" href="/" className={styles.title}>
          <h1>Violicas</h1>
        </Button>
        <div className={styles.menu}>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/cart">Cart</Button>
          <Button color="inherit" href="#contact">Contact</Button>
          <Button color="inherit">About</Button>
        </div>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
