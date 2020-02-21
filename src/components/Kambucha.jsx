import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
}));

function Order(props){
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <h3>Name: {props.name}</h3>
      <h3>Brand: {props.brand}</h3>
      <h3>Flavor: {props.price}</h3>
      <h3>Quantity: {props.flavor}</h3>
    </div>
  );
}


Order.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string
};

export default Order;