import { Divider } from 'semantic-ui-react';

const ProgramFeePaymentHeader = () => {
  return (
    <div>
      <div className="program-fee-payment-header">
        <h1>Confirm Your Participation</h1>
        <Divider />
      </div>
      <div className="program-fee-payment-subheader">
        <h1>Program Fee</h1>
        <p>{`You're just one step away from confirming your participation in your program! Submit your program fee by clicking the button below.`}</p>
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
