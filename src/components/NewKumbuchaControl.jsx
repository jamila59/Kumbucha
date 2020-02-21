import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import KambuchaForm from './KambuchaForm';

class NewKumbuchaControl extends React.Component {

  constructor(props)  {
    super(props);
    this.state = { 
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }
    

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <KambuchaForm/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewKumbuchaControl;