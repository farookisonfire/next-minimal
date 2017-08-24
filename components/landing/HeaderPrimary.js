import React from 'react';

const HeaderPrimary = () => (
  <div className="header-primary">
    <img
      alt="heart"
      className="header-primary-logo"
      src="https://s3.amazonaws.com/minimal-spaces/heart-400.png" />
    <style jsx>{`
      .header-primary {
        position: absolute;
        top: 65%;
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
      }
      
      .header-primary-logo {
        width: 200px;
      }  

      @media (max-width: 768px) {
        .header-primary {
          top: 35%;
        }
        
        .header-primary-logo {
          width: 200px;
        }
      }
    `}</style>
  </div>
);

export default HeaderPrimary;
