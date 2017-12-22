import { Divider } from 'semantic-ui-react';

const ClippersPageHeader = () => (
  <div>
    <div className="clippers-header">
      <h1>Support One Heart Source in being recognized by the Los Angeles Clippers as the non-profit of the night!</h1>
      <p>100% of ticket sales go towards One Heart Source initiatives</p>
      <div className="logo-container">
        <img className="logo-clippers" alt="clippers" src="https://s3.amazonaws.com/minimal-spaces/la-clippers.png" />
        <img className="logo-thunder" alt="thunder" src="https://s3.amazonaws.com/minimal-spaces/okc-thunder2.png" />
      </div>
    </div>
    <div className="clippers-subheader">
      <h1>LA Clippers vs. OKC Thunder</h1>
      <p>January 4, 2018</p>
      <p>7:30PM</p>
      <p>Staples Center, Los Angeles</p>
      <Divider />
    </div>
    <p className="purchase-instructions-text">Buy Tickets for Jan 4th, 2018 LA Clippers vs the OK Thunder right here!</p>
    <style jsx>{`
    .clippers-header h1 {
      font-weight: 300;
      font-size: 42px;
      margin-bottom: 20px;
      text-align: center;
      color: rgba(255,255,255,1)
    }
    .clippers-header p {
      color: rgba(240,240,240,1);
      font-size: 18px;
      margin: 0;
      text-align: center;
    }
    .clippers-subheader h1 {
      color: rgba(255,255,255,1);
      margin-top: 30px;
      font-weight: 300;
      font-size: 24px;
      text-align: center;
    }
    .clippers-subheader p {
      color: rgba(240,240,240,1);
      font-size: 16px;
      margin: 0;
      text-align: center;
    }
    .logo-container {
      text-align: center;
    }
    .logo-clippers {
      width: 150px;
    }
    .logo-thunder {
      width: 250px;
    }
    .purchase-instructions-text {
      color: rgba(240,240,240,1);
      font-size: 16px;
      margin: 0;
      text-align: center;
      margin-bottom: 48px;
    }
    `}</style>
  </div>
);

export default ClippersPageHeader;
