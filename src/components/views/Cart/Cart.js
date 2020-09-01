import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { TableContainer } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

import { connect } from 'react-redux';
import { getCart, changeAmount, addNotes, removeProduct } from '../../../redux/cartRedux.js';

const Component = ({className, cart, changeAmount, addNotes, removeProduct }) => {

  return (
    <div className={clsx(className, styles.root)}>

      <Container>
        <h2 className={styles.title}>Your Order</h2>
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table className={styles.table} aria-label="cart table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map(item => (
                <TableRow key={item.id}>
                  <TableCell className={styles.notesWrapper}>
                    {item.title}
                    <textarea
                      value={item.notes}
                      placeholder="Personalize your product here"
                      onChange={e => addNotes({ id: item.id, notes: e.target.value })}
                      className={styles.notes}>
                    </textarea>
                  </TableCell>
                  <TableCell align="center">$ {item.price}</TableCell>
                  <TableCell align="center">
                    <AmountWidget value={item.amount} onChange={e => changeAmount({ id: item.id, amount: parseInt(e.target.value) })} />
                  </TableCell>
                  <TableCell align="center">
                    ${item.price * item.amount}
                    <Button color="secondary" variant="outlined" className={styles.delete} onClick={() => removeProduct({ id: item.id })}><DeleteIcon /></Button>
                  </TableCell>
                 </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button color="primary" variant="contained" href="/orderSummary">My cart</Button>
      </Container>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
  changeAmount: PropTypes.func,
  addNotes: PropTypes.func,
  removeProduct: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  changeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
  addNotes: (id, notes) => dispatch(addNotes(id, notes)),
  removeProduct: (id) => dispatch(removeProduct(id)),
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  CartContainer as Cart,
  Component as CartComponent,
};