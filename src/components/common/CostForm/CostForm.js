import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CostForm.module.scss';

const Component = ({ className, children, cart }) => (
  <div className={clsx(className, styles.root)}>
    <Form>
    <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="first-name">First name</Label>
            <Input type="text" id="first-name" name="name" required />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="last-name">Last name</Label>
            <Input type="text" id="last-name" name="name" required />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" id="address" name="address" placeholder="Street, house number" required />
      </FormGroup>
      <Row form>
        <Col md={2}>
          <FormGroup>
            <Label for="post-code">Post code</Label>
            <Input type="text" id="post-code" name="post-code" placeholder="00-000" required />
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" id="city" name="city" required />
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input type="text" id="country" name="country" required />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input type="text" id="phone" name="phone" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
        </Col>
      </Row>
      {children}
    </Form>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CostForm,
  // Container as BillingDetailsForm,
  Component as CostFormComponent,
};