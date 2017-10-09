import { Divider } from 'semantic-ui-react';

const ProgramFeePaymentHeader = (props) => {
  const { applicantDetails = {} } = props;
  const {
    firstName,
  } = applicantDetails;

  return (
    <div>
      <div className="program-fee-payment-header">
        <h1>Program Fee Payment</h1>
        <Divider />
      </div>
      <div className="program-fee-payment-subheader">
        <h1>Finalize Your Participation</h1>
        <p>{`${firstName} you're just one step away from finalizing your participation in your program! Your next step is to select a program fee payment option that works for you.`}</p>
      </div>
      <style jsx>{`
      .program-fee-payment-header h1 {
        font-weight: 300;
        font-size: 36px;
        margin-bottom: 20px;
      }

      .program-fee-payment-subheader h1 {
        margin-top: 30px;
        font-weight: 300;
        font-size: 24px;
      }

      .program-fee-payment-subheader p {
        color: rgba(34,34,34,.7);
        font-size: 16px;
        margin-bottom: 30px;
      }  
      `}</style>
    </div>
  );
};

export default ProgramFeePaymentHeader;
