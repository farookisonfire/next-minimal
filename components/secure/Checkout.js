import 'whatwg-fetch';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { PAYMENT_SERVER_URL, STRIPE_PUBLISHABLE } from '../../lib/constants';
import DisabledButton from '../shared/DisabledButton';

const Checkout = (props) => {
  const {
    userId = '',
    selectedProgramId = '',
    validate = () => {},
    checked = false,
    handlePaymentSuccess = () => {},
    handlePaymentFail = () => {},
  } = props;

  const onToken = (token) => {
    const payload = {
      token,
      selectedProgramId,
    };

    fetch(`${PAYMENT_SERVER_URL}/secure/${userId}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(() => handlePaymentSuccess())
    .catch((err) => {
      console.log('we have an error:', err);
      return handlePaymentFail();
    });
  };

  const isValid = userId && selectedProgramId && checked;

  const buttonToUse = isValid ?
    (<StripeCheckout
      image={'https://s3.amazonaws.com/minimal-spaces/single-heart-icon_9_3_17.png'}
      name={'One Heart Source'}
      description={'Secure your position!'}
      amount={300 * 100}
      locale={'auto'}
      panelLabel={'Submit'}
      label={'Secure Your Position'}
      zipCode
      billingAddress
      allowRememberMe={false}
      token={onToken}
      stripeKey={STRIPE_PUBLISHABLE}
      style={{ width: 175 }} />) :
    (<DisabledButton
      buttonText={'Secure Your Program'}
      clickHandler={validate} />);

  return (
    <div>
      {buttonToUse}
    </div>
  );
};

export default Checkout;
