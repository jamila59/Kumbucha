import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const moveCard = {
  paddingLeft:'400px',
};


function KambuchaForm(props) {

  let _name = null;
  let _brand = null;
  let _flavor = null;
  let _quantity = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDesault();
    props.onNewTicketCreation({name: _name.value, brand: _brand.value, _flavor: _flavor.value, quantity: _quantity.value});
    _name.value = '';
    _brand.value = '';
    _flavor.value = '';
    _quantity.value = '';

  }

  // const classes = useStyles();
  return (
    <div style={moveCard}>
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleNewTicketFormSubmission}>
            <h3>Employee Order.</h3>
            <TextField 
              type='text'
              id="filled-basic" 
              label="Name" 
              variant="filled" 
              ref={(input) => {_name = input;}}/>
            <br/><br/>
            <TextField 
              type='text'
              id="filled-basic" 
              label="Brand"
              variant="filled"
              ref={(input) => {_brand = input;}}/> 
            <br/><br/>
            <TextField 
              type='text'
              id="filled-basic"
              label="Flavor"
              variant="filled"
              ref={(input) => {_flavor = input;}}/> 
            <br/><br/>
            <TextField
              type='text'
              id="filled-basic"
              label="Quantity"
              variant="filled" 
              ref={(input) => {_quantity = input;}}/>
          </form> 
        </CardContent>
        <CardActions>
          <Button   variant="contained" size="medium" color="primary">Submit</Button>
        </CardActions>
      </Card>
    </div>
  );
}

// const useStyles = makeStyles({
//   root: {
//     minWidth: 360,
//     width: '170px',
//     marginTop: 100,
//     height: '490px',
//   },
//   title: {
//     fontSize: 14,
      
//   },
//   pos: {
//     marginBottom: 1,
      
//   },
// });

KambuchaForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};


export default KambuchaForm;
