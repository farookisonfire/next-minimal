import 'whatwg-fetch';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { PAYMENT_SERVER_URL, STRIPE_PUBLISHABLE } from '../../lib/constants';
import DisabledButton from './DisabledButton';

const Checkout = (props) => {
  const {
    userId = '',
    selectedProgramId = '',
    validate = () => {},
    checked = false,
    handlePaymentSuccess = () => {},
    handlePaymentFail = () => {},
    renderStripeButton = false,
    enrollmentFee = 300,
    apiPath = 'secure',
    name = {},
    label = 'Secure your Position',
    description = 'Secure your position!',
    fellow = false,
    billingAddress = true,
    campaign = '',
    clipperOrder = {},
    resetSelectionSuccess,
  } = props;

  const onToken = (token) => {
    const payload = {
      token,
      selectedProgramId,
      enrollmentFee,
      name,
      fellow,
      campaign,
      clipperOrder,
    };

    const resolvePaymentUrl = (URI, path, id) => {
      return userId ?
        `${PAYMENT_SERVER_URL}/${apiPath}/${id}` :
        `${PAYMENT_SERVER_URL}/${apiPath}`;
    };

    const paymentUrl = resolvePaymentUrl(PAYMENT_SERVER_URL, apiPath, userId);


    fetch(paymentUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(() => {
      resetSelectionSuccess();
      return handlePaymentSuccess();
    })
    .catch((err) => {
      console.log('we have an error:', err);
      return handlePaymentFail();
    });
  };

  const buttonToUse = renderStripeButton ?
    (<StripeCheckout
      image={'https://s3.amazonaws.com/minimal-spaces/single-heart-icon_9_3_17.png'}
      name={'One Heart Source'}
      description={description}
      amount={enrollmentFee * 100}
      locale={'auto'}
      panelLabel={'Pay'}
      label={label}
      zipCode
      billingAddress={billingAddress}
      allowRememberMe={false}
      token={onToken}
      stripeKey={STRIPE_PUBLISHABLE}
      style={{ width: 175 }} />) :
    (<DisabledButton
      buttonText={label}
      clickHandler={validate} />);

  return (
    <div>
      {buttonToUse}
    </div>
  );
};

export default Checkout;
