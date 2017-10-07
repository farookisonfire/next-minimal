import { Component } from 'react';
import { Grid, Icon, Message } from 'semantic-ui-react';
import ProgramFeePaymentHeader from './ProgramFeePaymentHeader';
import Checkout from '../shared/Checkout';
import Footer from '../footer/Footer';
import DropDown from '../shared/DropDown';
import CheckBox from '../shared/CheckBox';
import ParticipationAgreementModal from '../shared/ParticipationAgreementModal';
import ProgramFeeList from '../shared/ProgramFeeList';
import RadioButtonGroup from '../shared/RadioButtonGroup';
import {
  SELECT_PROGRAM,
  FELLOWSHIP_ENROLLMENT_FEE,
} from '../../lib/constants';

class ProgramFeePaymentPage extends Component {
  constructor() {
    super();

    this.state = {
      selectedProgramId: '',
      checked: '',
      selectedProgramType: 'serve',
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
    this.handleRadioOnChange = this.handleRadioOnChange.bind(this);
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

  handleRadioOnChange(e, data) {
    this.setState({ selectedProgramType: data.value });
  }

  render() {
    const {
      userId,
      programDetails = {},
    } = this.props;

    const {
      date = '',
      type = '',
      programFee = '',
    } = programDetails;

    console.log('programDetails in paymentPage', programDetails);
    
    const { checked, errors } = this.state;
    const renderStripeButton = checked;
    return (
      <div>
        <div className="program-fee-payment-header-container">
          <ProgramFeePaymentHeader />
        </div>
        <div className="program-fee-body">
          <div>
            <h4>Your Program:</h4>
            <h1>{type}</h1>
            <h3>{date}</h3>
          </div>
          <div className="checkbox-container">
            <CheckBox
              onCheckHandler={this.handleCheck}
              label={<label 
                className="check-label">
                I understand that the program fee is non-refundable, but can be applied to programs in 2019.</label>} />
            <p className={checked || errors.checked ? 'error-text-default' : 'error-text-visible'}>
              *Required: Read and Agree
            </p>
          </div>
          <div>
            <Checkout
              userId={userId}
              validate={this.validate}
              label={'Confirm'}
              renderStripeButton={renderStripeButton}
              handlePaymentSuccess={this.handlePaymentSuccess}
              handlePaymentFail={this.handlePaymentFail}
              enrollmentFee={programFee}
              apiPath={'confirm'} />
          </div>
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
        </div>
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
        `}</style>
      </div>
    );
  }
}

export default ProgramFeePaymentPage;
