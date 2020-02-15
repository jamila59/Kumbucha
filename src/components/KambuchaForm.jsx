import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const moveCard = {
  paddingLeft:'400px',
};

const useStyles = makeStyles({
  root: {
    minWidth: 360,
    width: '170px',
    marginTop: 100,
    height: '490px',
  },
  title: {
    fontSize: 14,
      
  },
  pos: {
    marginBottom: 1,
      
  },
});



function KambuchaForm() {
  const classes = useStyles();

  return (
    <div style={moveCard}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <form>
            <h3>Employee Order.</h3>
            <TextField id="filled-basic" label="Name" variant="filled" />
            <br/><br/>
            <TextField id="filled-basic" label="Brand" variant="filled" />
            <br/><br/>
            <TextField id="filled-basic" label="Flavor" variant="filled" />
            <br/><br/>
            <TextField id="filled-basic" label="Quantity" variant="filled" />
          </form> 
        </CardContent>
        <CardActions>
          <Button   variant="contained" size="medium" color="primary">Submit</Button>
        </CardActions>
      </Card>
 
   
    </div>
  );
}
export default KambuchaForm;
