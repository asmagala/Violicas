import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.footer}>

<div className={styles.copyright}>
  <p>Copyright ©2020 All rights reserved</p>
</div>

<div className={styles.media}>
  <ul>
    <li>
      <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
        <TwitterIcon>Twitter</TwitterIcon>
      </a>
    </li>
    <li>
      <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
        <FacebookIcon>Facebook</FacebookIcon>
      </a>
    </li>
    <li>
      <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
        <YouTubeIcon>YouTube</YouTubeIcon>
      </a>
    </li>
    <li>
      <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
        <InstagramIcon>Instagram</InstagramIcon>
      </a>
    </li>
  </ul>
</div>
</div>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
