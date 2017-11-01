import { Component } from 'react';
import { Message, Grid } from 'semantic-ui-react';
import moment from 'moment';
import ProgramFeePaymentHeader from './ProgramFeePaymentHeader';
import Checkout from '../shared/Checkout';
import Footer from '../footer/Footer';
import CheckBox from '../shared/CheckBox';
import PaymentPlanButton from './PaymentPlanButton';

class ProgramFeePaymentPage extends Component {
  constructor() {
    super();

    this.state = {
      selectedProgramId: '',
      checked: '',
      errors: { checked: true },
      paymentSuccess: false,
      paymentFail: false,
    };

    this.handleSelectProgramDropdown = this.handleSelectProgramDropdown.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.validate = this.validate.bind(this);
    this.handlePaymentSuccess = this.handlePaymentSuccess.bind(this);
    this.handlePaymentFail = this.handlePaymentFail.bind(this);
    this.handlePaymentSuccessDismiss = this.handlePaymentSuccessDismiss.bind(this);
    this.handlePaymentFailDismiss = this.handlePaymentFailDismiss.bind(this);
    this.handleEnrollPaymentPlan = this.handleEnrollPaymentPlan.bind(this);
  }

  handleSelectProgramDropdown(e, data) {
    const { value = '' } = data;
    const selectedProgramId = value;
    this.setState({ selectedProgramId });
  }

  handleCheck(e, data) {
    const { checked } = data;
    this.setState({ checked });
  }

  validate() {
    const { checked = '' } = this.state;
    const errorsClone = Object.assign({}, this.state.errors, { checked });
    this.setState({ errors: errorsClone });
    return checked;
  }

  handlePaymentSuccess() {
    this.setState({ paymentSuccess: true });
  }

  handlePaymentSuccessDismiss() {
    this.setState({ paymentSuccess: false });
  }

  handlePaymentFail() {
    this.setState({ paymentFail: true });
  }

  handlePaymentFailDismiss() {
    this.setState({ paymentFail: false });
  }

  handleEnrollPaymentPlan(id, fellow) {
    const { enrollPaymentPlan } = this.props;
    enrollPaymentPlan(id, fellow);
  }

  render() {
    const {
      userId,
      programDetails = {},
      applicantDetails = {},
      fellow,
      programFeePageData = {},
    } = this.props;

    const {
      date = '',
      type = '',
      programFee = '',
    } = programDetails;

    const {
      promotionDeadline,
      finalDeadline,
    } = applicantDetails;

    const promotionDeadlineToUse = promotionDeadline ?
      moment(promotionDeadline).format(('dddd, MMMM Do YYYY')) :
      '';

    const finalDeadlineToUse = finalDeadline ?
      moment(finalDeadline).format(('dddd, MMMM Do YYYY')) :
      '';

    const promotionText = promotionDeadlineToUse ?
      `by 5pm EST on ${promotionDeadlineToUse}` :
      'in 2 weeks';

    const finalDeadlineText = finalDeadlineToUse ?
      `5pm EST on ${finalDeadlineToUse}` :
      'is in 90 days';

    const {
      paymentPlanSuccess = false,
      paymentPlanFail = false,
    } = programFeePageData;

    const { checked, errors } = this.state;
    const renderStripeButton = checked;
    return (
      <div>
        <div className="program-fee-payment-header-container">
          <ProgramFeePaymentHeader applicantDetails={applicantDetails} />
        </div>
        <div className="program-fee-body">
          <div>
            <h4>Your Program:</h4>
            <h1>{type}</h1>
            <h3>{date}</h3>
          </div>
        </div>
        <div className="checkbox-container">
          <CheckBox
            onCheckHandler={this.handleCheck}
            label={<label 
              className="check-label">
              I understand that the program fee is non-refundable, but can be applied to a program in 2019 should I choose to defer my enrollment.</label>} />
          <p className={checked || errors.checked ? 'error-text-default' : 'error-text-visible'}>
            *Required: Read and Agree
          </p>
        </div>
        <div className="program-fee-grid">
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column>
                <div className="program-fee-grid-header-container">
                  <h2>Option 1: Pay Now + Promotion</h2>
                  <p>{`Pay your program fee in full ${promotionText} and OHS will provide you with free, comprehensive travel insurance (a $100 value)!`}</p>
                </div>
                <div className="program-fee-grid-button-container">
                  <Checkout
                    userId={userId}
                    validate={this.validate}
                    label={'Pay Now'}
                    renderStripeButton={renderStripeButton}
                    handlePaymentSuccess={this.handlePaymentSuccess}
                    handlePaymentFail={this.handlePaymentFail}
                    enrollmentFee={programFee}
                    apiPath={'confirm'}
                    fellow={fellow}
                    billingAddress={false} />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="program-fee-grid-header-container">
                  <h2>Option 2: Payment Plan + Fundraising</h2>
                  <p>{`Enroll in minimum monthly payments of $200 and get 90 days to fundraise your program fee. The final deadline for your program fee is ${finalDeadlineText}!`}</p>
                </div>
                <div className="program-fee-grid-button-container">
                  <PaymentPlanButton
                    renderMainButton={renderStripeButton}
                    validate={this.validate}
                    enroll={() => this.handleEnrollPaymentPlan(userId, fellow)} />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="secure-payment-container">
          <Message
            compact
            color="green"
            hidden={!this.state.paymentSuccess}
            onClick={this.handlePaymentSuccessDismiss}>
            Congratulations, your participation has been confirmed!
          </Message>
          <Message
            compact
            color="red"
            hidden={!this.state.paymentFail}
            onClick={this.handlePaymentFailDismiss}>
            Payment not processed, please try again. If the problem persists reach out to us at admissions@oneheartsource.org.
          </Message>
          <Message
            compact
            color="green"
            hidden={!paymentPlanSuccess}
            onClick={this.handlePaymentSuccessDismiss}>
            Congratulations, you signed up for the payment plan. Our team will fellow up with more instructions via email!
          </Message>
          <Message
            compact
            color="red"
            hidden={!paymentPlanFail}
            onClick={this.handlePaymentFailDismiss}>
            Sorry, we were unable to enroll you in the payment plan. If this problem persists, reach out to us at admissions@oneheartsource.org.
          </Message>
        </div>
        <Footer />
        <style jsx>{`
          .program-fee-payment-header-container {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            margin-bottom: 50px;
          }

          .program-fee-body {
            text-align: center;
          }

          .program-fee-body h1 {
            margin-top: 16px;
            margin-bottom: 8px;
            font-size: 32px;
            font-weight: 400;
          }

          .program-fee-body h3 {
            margin-top: 0;
            font-size: 20px;
            font-weight: 400;
          }

          .checkbox-container {
            max-width: 400px;
            margin: 24px auto 0 auto;
          }

          .checkbox-container label {
            font-size: .9em;
          }
          
          .checkbox-container p {
            text-align: center;
          }

          .error-text-default {
            visibility: hidden;
            color: red;
            font-style: italic;
            font-size: .8em;
            margin-bottom: 8px;
          }

          .error-text-visible {
            visibility: visible;
            color: red;
            font-style: italic;
            font-size: .8em;
            margin-bottom: 8px;
          }
          
          .secure-payment-container {
            width: 100%;
            padding: 40px;
            text-align: center;
          }

          .program-fee-grid {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 32px;
          }

          .program-fee-grid-header-container {
            text-align: center;
            margin-bottom: 16px;
          }

          .program-fee-grid h2 {
            margin-top: 16px;
            margin-bottom: 8px;
            font-size: 20px;
            font-weight: 400;
            text-decoration: underline;
          }

          .program-fee-grid-button-container {
            text-align: center;
          }
          
        `}</style>
      </div>
    );
  }
}

export default ProgramFeePaymentPage;
