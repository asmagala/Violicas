import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

//import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

//import Button from '@material-ui/core/Button';
import styles from './UpperStripe.module.scss';
import { Cart } from '../../views/Cart/Cart';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

const Component = ({className, cart }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.phone}>
      <p>Violin Replicas For Fiddlers ;)</p>
    </div>

    {/*}
    <div className={styles.cart}>
      <Button>
        <ShoppingBasketIcon size="large" />
        <div className={styles.cartContent}>
          <span>{parseInt(cart.amount)}</span>
        </div>
      </Button>

      <Cart />
      </div>
    */}
    <Cart />
    
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

//const Container = connect(mapStateToProps)(Component);

export {
  Component as UpperStripe,
  //Container as UpperStripe,
  Component as UpperStripeComponent,
};
