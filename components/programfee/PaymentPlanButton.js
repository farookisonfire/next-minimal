import DisabledButton from '../shared/DisabledButton';
import EnabledButton from '../shared/EnabledButton';

const PaymentPlanButton = (props) => {
  const {
    renderMainButton = false,
    validate = () => {},
    enroll,
  } = props;

  const buttonToUse = renderMainButton ? (
    <EnabledButton
      buttonText={'Payment Plan'}
      clickHandler={enroll} />
  ) : (
    <DisabledButton
      clickHandler={validate}
      buttonText={'Payment Plan'} />
  );

  return (
    <div>
      {buttonToUse}
    </div>
  );
};

export default PaymentPlanButton;
