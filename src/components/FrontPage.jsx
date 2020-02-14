import React from 'react';
import MenuList from './KambuchaMenu';


const backgroundStyle = {
  backgroundPosition: 'center center',
  height: '100vh',
    
  display: 'inlineBlock',
  zIndex: '-1',
  width: '100%',
  paddingTop: '15%',
    
  backgroundRepeat: 'no-repeat',
  backgroundSize:'cover',
  flex: 1,
  resizeMode: 'cover',
  backgroundImage: 'url(' + 'https://www.tate.org.uk/art/images/work/P/P02/P02356_10.jpg' + ')'
   
};


function FrontPage(){
  return (
    <div style={backgroundStyle}>
      <MenuList/>
    </div>
  );    
}

export default FrontPage;