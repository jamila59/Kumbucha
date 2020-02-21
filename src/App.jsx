import { Switch, Route, } from 'react-router-dom';
import React from 'react';
import './App.css';
// import FrontPage from './components/FrontPage';
import Header from './components/Header';
import Buttons from './components/Navigation';
import NewKumbuchaControl from './components/NewKumbuchaControl';
import MenuList from './KambuchaMenu';

class App extends React.Component() {
  constructor(props){
    super(props);
    this.state = {
      masterKumbuchaList: []
    };
    this.handleAddingNewKumbuchaToList = this.handleAddingNewKumbuchaToList.bind(this);
  }


  handleAddingNewKumbuchaToList(newKumbucha){
    var newMasterKumbuchaList = this.state.masterKumbuchaList.slice();
    newMasterKumbuchaList.push(newKumbucha);
    this.setState({masterKumbuchaList: newMasterKumbuchaList});
  }
  render(){
    return (
    
      <div className="App">
        <Header/>
        <Buttons/>
        <Switch>
          <Route exact path='/' render={() =><ManuList kambuchaList={this.state.masterKumbuchaList} />}/>
          <Route path='/newKumbucha' component={NewKumbuchaControl} /> 
        </Switch>
      </div>


  
    
    );
  }
}

export default App;

