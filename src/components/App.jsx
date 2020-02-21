import React from 'react';
import Header from './Header';
import MenuList from './MenuList';
import NewKumbuchaControl from './NewKumbuchaControl';
import { Switch, Route } from 'react-router-dom';
import Button from './Navigation';
import FrontPage from './FrontPage';

class App extends React.Component {

  constructor(props) {
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
      <div>
        <Header/>
        <Button/>
        {/* <FrontPage/> */}
        <Switch>
          <Route exact path='/' render={()=><MenuList menuList={this.state.masterKumbuchaList} />} />
          <Route path='/newKumbucha' render={()=><NewKumbuchaControl onNewKumbuchaCreation={this.handleAddingNewKumbuchaToList} />} />
        </Switch>
      </div>
    );
  }

}

export default App;