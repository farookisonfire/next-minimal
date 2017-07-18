import React from 'react';

const HeaderPrimary = () => (
  <div className="header-primary">
    <img className="header-primary-logo" src="https://s3.amazonaws.com/minimal-spaces/heart-400.png" />
    <style jsx>{`
      .header-primary {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
      }
      .header-primary-logo {
        width: 330px;
      }  
    `}</style>
  </div> 
);

export default HeaderPrimary;