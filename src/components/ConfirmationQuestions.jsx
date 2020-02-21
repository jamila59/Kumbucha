import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return(
    <div>
      <p>Would you like to create an order?</p>
      <button onClick={props.onTroubleshootingConfirmation} >Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
    onTroubleshootingConfirmation: PropTypes.func
  };

export default ConfirmationQuestions;