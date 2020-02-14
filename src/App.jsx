import { Switch, Route, } from 'react-router-dom';
import React from 'react';
import './App.css';
import FrontPage from './components/FrontPage';
import KambuchaForm from './KambuchaForm';


function App() {
  return (
    
    <div className="App">
    
      <Switch>
        <Route exact path='/' component={FrontPage} />
        <Route path='/newKambucha' component={KambuchaForm} /> 
      </Switch>
    </div>


  
    
  );
}

export default App;

