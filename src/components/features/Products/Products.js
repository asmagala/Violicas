import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Products.module.scss';
import { VCard } from '../../common/VCard/VCard';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

const Component = ({className, products}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title} >Products</h2>
      {products.map(item => ( <VCard className='col-lg-3 col-12' key={item.id} {...item} />))}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getAll(state),
});


// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ProductsContainer = connect(mapStateToProps)(Component);

export {
  ProductsContainer as Products,
  Component as ProductsComponent,
};
