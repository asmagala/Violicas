import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './VCard.module.scss';

const Component = ({className, id, title, images, price }) => (
  <div className={clsx(className, styles.root)}>
    <Card className={styles.card}>
      <div className={styles.title}>
        {title}
      </div>

      <div>
        <img src={images[0]} alt='' className={styles.image} />
      </div>

      <div className={styles.price}>
        ${price}
      </div>

      <div>
        <Button className={styles.buttoncl} href={`/products/${id}`} color="primary" variant="contained">Info</Button>
        <Button className={styles.buttoncl} color="primary" variant="contained"><ShoppingBasketIcon /></Button>
      </div>

    </Card>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
  id: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as VCard,
  // Container as VCard,
  Component as VCardComponent,
};
