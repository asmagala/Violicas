import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { AmountWidget } from '../../common/AmountWidget/AmountWidget';


import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux.js';
import { addProduct } from '../../../redux/cartRedux';

const Component = ({ className, product,  addProduct }) => {

  const { id, title, description, images, price } = product;

  const [value, setValue] = React.useState(1);

  const onChange = ({ target }) => {
    setValue(parseInt(target.value));
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth="lg">
        <Card className={styles.card}>

          <h2 className={styles.title}>{title}</h2>
          <Divider variant="middle" />

          <CardContent className={styles.content}>
          
            <div className={styles.description}>
              <div id="unit_total_price">price: ${price}</div><br />
              {description}
            </div>
            <div className={styles.images}>
              {images.map(item => (
                <CardMedia
                  key={id}
                  component="img"
                  alt="violin"
                  image={item}
                  className={styles.image}
                />
              ))}
            </div>
            <div className={styles.action}>
              <div className={styles.amount}>
                <AmountWidget value={value} onChange={onChange} />
                {/*<input type="number" min="1" defaultValue="1" />*/}
              </div>
              
              <Button className={styles.submit} color="primary" variant="contained" type="submit">Buy</Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

Component.propTypes = {
  product: PropTypes.object,
  className: PropTypes.string,
  addProduct: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  product: getById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addProduct: (product, amount) => dispatch(addProduct( { product, amount })),
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  // Container as Product,
  ProductContainer as Product,
  Component as ProductComponent,
};
