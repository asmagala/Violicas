import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import styles from './OrderSummary.module.scss';

const Component = ({className, cart}) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.title}>Your order summary</h2>
    <Container maxWidth="lg">
      <Paper className={styles.paper}>
        <Card elevation={3} className={styles.card}>
          <CardHeader title="Products" />
          {cart.products.map(item => (
            <div key={item.id} className={styles.product}>
              <Table>
                <TableRow>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.notes}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.price * item.amount}</TableCell>
                </TableRow>
              </Table>
            </div>
          ))}
        </Card>

        <Card elevation={3} className={styles.card}>
          <CardHeader title="Cart total" />

        </Card>
      </Paper>
    </Container>
  </div>
);

Component.propTypes = {
  cart: PropTypes.object,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const OrderContainer = connect(mapStateToProps)(Component);

export {
  //Component as OrderSummary,
  OrderContainer as OrderSummary,
  Component as OrderSummaryComponent,
};
