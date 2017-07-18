import React from 'react';
import { Divider } from 'semantic-ui-react';

const AboutHeader = () => (
  <div>
    <div className="about-header">
      <h1>About One Heart Source</h1>
      <Divider />
    </div>
    <div className="about-subheader">
      <h1>Our mission is to end poverty in our lifetimes by empowering people through high quality global initiatives focused on education and health.</h1>
      <p>One Heart Source is a leader in bringing innovative experiential learning opportunities to university students and working professionals. Founded in 2008, and rated a top non-profit organization in Los Angeles for the last 3 years, we partner with communities around the world to offer our members a meaningful career-advancing and growing experience like no other.  All One Heart Source programs are designed with the highest safety considerations for members, staff, and the communities we serve.</p>
    </div>
    <style jsx>{`
    .about-header h1 {
      font-weight: 300;
      font-size: 36px;
      margin-bottom: 20px;
    }

    .about-subheader h1 {
      margin-top: 30px;
      font-weight: 300;
      font-size: 24px;
    }

    .about-subheader p {
      color: rgba(34,34,34,.7);
      font-size: 16px;
      margin-bottom: 30px;
    }  
    `}</style>
  </div>
);

export default AboutHeader;
