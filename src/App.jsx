import { Switch, Route, } from 'react-router-dom';
import React from 'react';
import './App.css';
import FrontPage from './components/FrontPage';
// import KambuchaForm from './components/KambuchaForm';
import Header from './components/Header';
import Buttons from './components/Navigation';
import NewKumbuchaControl from './components/NewKumbuchaControl';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Buttons/>
      <Switch>
        <Route exact path='/' component={FrontPage} />
        <Route path='/newKumbucha' component={NewKumbuchaControl} /> 
      </Switch>
    </div>


  
    
  );
}

export default App;