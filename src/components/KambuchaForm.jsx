import React, {useState} from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const moveCard = {
  paddingLeft:'400px',
};

function KambuchaForm(props){
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [flavor, setFlavor] = useState('');
  const [quantity, setPrice] = useState('');

  function handleNewKambuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKumbuchaCreation({name: name, brand: brand, flavor: flavor, quantity: quantity});
  }
  return(
    <div style={moveCard}>
      <Card variant='outlined'>
        <CardContent>
          <form onSubmit={handleNewKambuchaFormSubmission}>
            <h3>Employee Order</h3>
            <TextField 
              id="filled-basic" 
              type='text' 
              label="Name" 
              variant="filled" 
              value={name} 
              onInput={ e=>setName(e.target.value)} />
            <br/><br/>
            <TextField 
              id="filled-basic" 
              type='text'
              label="Brand"
              variant="filled"
              value={brand}
              onInput={ e=>setBrand(e.target.value)} />
            <br/><br/>
            <TextField
              id="filled-basic"
              type='text'
              label="flavor"
              variant="filled"
              value={flavor} 
              onInput={ e=>setFlavor(e.target.value)} />
            <br/><br/>
            <TextField 
              id="filled-basic" 
              label="Category"
              variant="filled" 
              type='text'
              value={quantity}
              onInput={ e=>setPrice(e.target.value)} />
            <br/><br/>
            <Button  variant='contained' size='medium' color='primary' type='submit'>Enter</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}



KambuchaForm.propTypes = {
  onNewKumbuchaCreation: PropTypes.func
};


export default KambuchaForm;


