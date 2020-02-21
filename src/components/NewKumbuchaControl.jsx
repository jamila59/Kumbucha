import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewKumbuchaControl extends React.Component {

    constructor(props)  {
        super(props);
        this.state = { 
            formVisibleOnPage: false
        };
        this.handleToubleShooting = this.handleToubleShooting.bind(this);
    }
    

    handleToubleShooting(){
        this.setState({formVisibleOnPage: true});
    }

    render(){
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage){
            currentlyVisibleContent = <KumbuchaForm/>;
        } else {
            currentlyVisibleContent = <ConfirmationQuestions/>;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

export default NewKumbuchaControl;