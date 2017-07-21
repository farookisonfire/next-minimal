import StripeCheckout from 'react-stripe-checkout';
 
class StripeCharge extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
  
  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_live_ZWJ5nr4iDOKdZFCuma0FRXPg"
          name="Three Comma Co." // the pop-in header title
          description="Big Data Stuff" // the pop-in header subtitle
          image="https://s3.amazonaws.com/minimal-spaces/heart-400.png" 
      />
    )
  }
}

export default StripeCharge;