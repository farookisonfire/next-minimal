import { Divider } from 'semantic-ui-react';
import moment from 'moment';

const ProgramFeePaymentHeader = (props) => {
  const { applicantDetails = {} } = props;
  const {
    firstName,
    promotionDeadline,
  } = applicantDetails;

  const promotionDeadlineToUse = promotionDeadline ?
    moment(promotionDeadline).format(('dddd, MMMM Do YYYY')) :
    '';

  const promotionText = promotionDeadlineToUse ?
    `by 5pm EST on ${promotionDeadlineToUse}` :
    'in 2 weeks';

  return (
    <div>
      <div className="program-fee-payment-header">
        <h1>Confirm Your Participation</h1>
        <Divider />
      </div>
      <div className="program-fee-payment-subheader">
        <h1>Program Fee</h1>
        <p>{`${firstName} you're just one step away from confirming your participation in your program! Pay your program fee in full ${promotionText} and OHS will provide you with $100 toward both your flight and travel insurance when you book through STA Travel (a $200 total value)! Submit your program fee by clicking the button below.`}</p>
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
