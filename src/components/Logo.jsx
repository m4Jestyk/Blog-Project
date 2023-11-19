import React from 'react';
import logo from './Images/logo.jpg'

function Logo({width = '10px'}) {
  return (
    <div>
      <img src={logo} alt="logo" style={{width}} />
    </div>
  );
}

export default Logo;
