import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Order from './Kambucha';


var menu = [
  {
    name: 'Fairy Tonic',
    brand: 'Blessed Brewery',
    price: 5,
    flavor: 'Strawberries and Ginger'
  },
  {
    name: 'Brew Me',
    brand: 'Dr.Kambucha',
    price: 7,
    flavor: 'Lemon,Ginger, Cayenne'

  },
  {
    name: 'Gingerade',
    brand: 'GTS',
    price: 6,
    flavor: 'Ginger Spice'
  }
];

const moveCard = {
  paddingLeft:'375px',
  opacity: 0.80  

};

const useStyles = makeStyles({
  root: {
    minWidth: 450,
    width: '190px',
    marginTop: 100,
    height: '400px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
      
  },
  title: {
    fontSize: 14,
      
  },
  pos: {
    marginBottom: 1,
      
  },
});
menu.name;

export default function MenuList() {
  const classes = useStyles();

  return (
    <div style={moveCard}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <h2>What we offer:</h2>
          <hr/>
          {menu.map((ticket, index) =>
            <Order name= {ticket.name}
              brand={ticket.brand}
              price={ticket.price}
              flavor={ticket.flavor} 
              key={index} />
          )}   
        </CardContent>
      </Card>
    </div>
  );
}