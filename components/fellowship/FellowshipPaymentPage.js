import { Component } from 'react';
import { Grid, Icon, Message } from 'semantic-ui-react';
import FellowshipPaymentHeader from './FellowshipPaymentHeader';
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

class SecurePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedProgramId: '',
      checked: '',
      selectedProgramType: 'serve',
      errors: {
        selectedProgramId: true,
        checked: true,
      },
      paymentSuccess: false,
      paymentFail: false,
    };

    this.handleSelectProgramDropdown = this.handleSelectProgramDropdown.bind(this);
    this.handleCheckParticipationAgreement = this.handleCheckParticipationAgreement.bind(this);
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

  handleCheckParticipationAgreement(e, data) {
    const { checked } = data;
    this.setState({ checked });
  }

  validate() {
    const { checked = '', selectedProgramId } = this.state;
    const { userId = '' } = this.props;

    const errorsClone = Object.assign({}, this.state.errors, {
      checked,
      selectedProgramId,
    });

    this.setState({ errors: errorsClone });
    return checked && selectedProgramId && userId;
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
      fellowshipPageData = {},
    } = this.props;

    const {
      radioButtons = [],
    } = fellowshipPageData;


    const {
      name,
      programs,
      programFees,
    } = this.props;

    const {
      errors = {},
      selectedProgramId,
      checked,
      selectedProgramType,
    } = this.state;

    const programsToRender = programs.filter(program => program.value === selectedProgramType);

    let programMatch;

    if (selectedProgramId) {
      programMatch = programs.filter((program) => {
        return program.id === selectedProgramId;
      });
    }

    const selectedProgram = programMatch && programMatch.length ?
      programMatch[0] :
      {};

    const {
      length = '',
    } = selectedProgram;

    let programFee;

    if (length === '4 week') {
      programFee = programFees[selectedProgramType].fourWeek;
    } else if (length === '2 week') {
      programFee = programFees[selectedProgramType].twoWeek;
    }

    const renderStripeButton = checked && selectedProgramId;

    return (
      <div>
        <div className="secure-top">
          <FellowshipPaymentHeader name={name} />
        </div>
        <div className="secure-actions">
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Icon size="big" name="lock" />
                <h4>1. Select Your Program and Dates</h4>
                <div className="radio-button-group">
                  <RadioButtonGroup
                    buttons={radioButtons}
                    selectedProgramType={selectedProgramType}
                    handleRadioOnChange={this.handleRadioOnChange} />
                </div>
                <DropDown
                  placeholder={'Select Dates...'}
                  fluid
                  fields={programsToRender}
                  onChangeHandler={this.handleSelectProgramDropdown}
                  dropdownType={SELECT_PROGRAM} />
                <p className={selectedProgramId || errors.selectedProgramId ? 'error-text-default' : 'error-text-visible'}>
                  *Required: Select Program
                </p>
              </Grid.Column>
              <Grid.Column>
                <Icon size="big" name="globe" />
                <div>
                  <div className="secure-your-position-container">
                    <h4>2. Secure Your Position</h4>
                    <div className="checkbox-container">
                      <CheckBox onCheckHandler={this.handleCheckParticipationAgreement} />
                      <span className="participation-agreement-modal-container">
                        <ParticipationAgreementModal />
                      </span>
                    </div>
                    <p className={checked || errors.checked ? 'error-text-default' : 'error-text-visible'}>
                      *Required: Read and Agree
                    </p>
                    <ProgramFeeList
                      enrollmentFee={FELLOWSHIP_ENROLLMENT_FEE}
                      programFee={programFee} />
                  </div>
                  <Checkout
                    validate={this.validate}
                    selectedProgramId={this.state.selectedProgramId}
                    checked={this.state.checked}
                    handlePaymentSuccess={this.handlePaymentSuccess}
                    renderStripeButton={renderStripeButton}
                    enrollmentFee={FELLOWSHIP_ENROLLMENT_FEE} />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
          <div className="secure-payment-container">
            <Message
              compact
              color="green"
              hidden={!this.state.paymentSuccess}
              onClick={this.handlePaymentSuccessDismiss}>
              Your position is secure! Our team will follow up via email with more details.
            </Message>
            <Message
              compact
              color="red"
              hidden={!this.state.paymentFail}
              onClick={this.handlePaymentFailDismiss}>
              Payment not processed, please try again. If the problem persists reach out to us at admissions@oneheartsource.org.
            </Message>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .secure-top {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            margin-bottom: 50px;
          }

          .secure-payment-container {
            width: 100%;
            padding: 40px;
            text-align: center;
          }

          .secure-actions {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            margin-top: 70px;
            margin-bottom: 50px;
            width: 60%; 
          }

          h2 {
            margin-top: 0;
            margin-bottom: 24px;
          }

          h4 {
            margin-top: 24px;
            margin-bottom: 8px;
          }

          .secure-your-position-container {
            margin: 24px auto 0 auto;
            max-width: 280px;
          }

          .checkbox-container {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .8em;
            margin-bottom: 0;
          }

          .participation-agreement-modal-container {
            margin-left: 8px;
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

          .radio-button-group {
            margin-bottom: 32px;
          }

          @media (max-width: 768px) {
            .secure-actions {
              width: 95%; 
            }
          }
        `}</style>
      </div>
    );
  }
}

export default SecurePage;
