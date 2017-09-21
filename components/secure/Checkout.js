import 'whatwg-fetch';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { PAYMENT_SERVER_URL, STRIPE_PUBLISHABLE } from '../constants';

const Checkout = (props) => {
  const {
    id,
  } = props;

  const onToken = (token) => {

    const tokenString = JSON.stringify(token);
    
    console.log('token: ', token, tokenString);

    fetch(`${PAYMENT_SERVER_URL}/secure/${id}`, {
      method: 'POST',
      body: tokenString,
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => console.log('we are in business', data))
    .catch(err => console.log('we have an error:', err));
  };

  return (
    <StripeCheckout
      image={'https://s3.amazonaws.com/minimal-spaces/single-heart-icon_9_3_17.png'}
      name={'One Heart Source'}
      description={'Secure your position!'}
      amount={100}
      locale={'auto'}
      panelLabel={'Secure'}
      label={'Secure Your Position'}
      zipCode
      billingAddress
      allowRememberMe={false}
      token={onToken}
      stripeKey={STRIPE_PUBLISHABLE} />
  );
};

export default Checkout;
