import { Divider } from 'semantic-ui-react';

const DonateHeader = () => (
  <div>
    <div className="donate-header">
      <h1>Make a Donation</h1>
      <Divider />
    </div>
    <div className="donate-subheader">
      <h1>Thank you for standing with us.</h1>
      <p>When you donate to One Heart Source, you are supporting our mission to eliminate poverty through high quality global initiatives focused on education and health. We appreciate your support!</p>
    </div>
    <style jsx>{`
    .donate-header h1 {
      font-weight: 300;
      font-size: 36px;
      margin-bottom: 20px;
    }

    .donate-subheader h1 {
      margin-top: 30px;
      font-weight: 300;
      font-size: 24px;
    }

    .donate-subheader p {
      color: rgba(34,34,34,.7);
      font-size: 16px;
      margin-bottom: 30px;
    }  
    `}</style>
  </div>
);

export default DonateHeader;
