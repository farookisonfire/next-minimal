import { Component } from 'react';
import { Grid, Icon, Message, Portal, Segment } from 'semantic-ui-react';
import SecureHeader from './SecureHeader';
import Checkout from '../shared/Checkout';
import Footer from '../footer/Footer';
import DropDown from '../shared/DropDown';
import CheckBox from '../shared/CheckBox';
import ParticipationAgreementModal from '../shared/ParticipationAgreementModal';
import ProgramFeeList from '../shared/ProgramFeeList';
import {
  SELECT_PROGRAM,
  HEALTH_PROGRAM_TYPE_ID,
  EDUCATION_PROGRAM_TYPE_ID,
  YOUTH_PROGRAM_TYPE_ID,
  ENROLLMENT_FEE,
} from '../../lib/constants';
import SecureProgramTable from './SecureProgramTable';

class SecurePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedProgramId: '',
      checked: '',
      errors: {
        selectedProgramId: true,
        checked: true,
      },
      paymentSuccess: false,
      paymentFail: false,
    };

    this.handleSelectProgramDropdown = this.handleSelectProgramDropdown.bind(this);
    this.handleEnroll = this.handleEnroll.bind(this);
    this.handleWaitlist = this.handleWaitlist.bind(this);
    this.handleCheckParticipationAgreement = this.handleCheckParticipationAgreement.bind(this);
    this.validate = this.validate.bind(this);
    this.handlePaymentSuccess = this.handlePaymentSuccess.bind(this);
    this.handlePaymentFail = this.handlePaymentFail.bind(this);
    this.handlePaymentSuccessDismiss = this.handlePaymentSuccessDismiss.bind(this);
    this.handlePaymentFailDismiss = this.handlePaymentFailDismiss.bind(this);
  }

  handleSelectProgramDropdown(e, data) {
    const { value = '' } = data;
    const selectedProgramId = value;
    this.setState({ selectedProgramId });
  }

  handleEnroll(e, data) {
    const { id } = data;
    const { securePage, secureSelectEnroll } = this.props;
    const { selectedProgramId } = securePage;

    if (id === selectedProgramId) return secureSelectEnroll(false);

    if (window && window.location) window.location.hash = 'secure-position';
    return secureSelectEnroll(true, id);
  }

  handleWaitlist() {
    console.log('HANDLE THE WAITLIST');
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

  render() {
    const {
      userId,
      name,
      programs,
      programTypeId,
      programFees,
      apiPath,
      campaign,
      securePage,
    } = this.props;

    const {
      programSelected,
      selectedProgramId,
    } = securePage;


    const {
      errors = {},
      checked,
    } = this.state;

    let dropDownTitle;
    if (programTypeId === HEALTH_PROGRAM_TYPE_ID) {
      dropDownTitle = 'Health Innovation';
    } else if (programTypeId === YOUTH_PROGRAM_TYPE_ID) {
      dropDownTitle = 'Youth Empowerment';
    } else if (programTypeId === EDUCATION_PROGRAM_TYPE_ID) {
      dropDownTitle = 'Education / Social Work';
    }

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
      programFee = programFees.fourWeek;
    } else if (length === '2 week') {
      programFee = programFees.twoWeek;
    } else if (length === '1 week') {
      programFee = programFees.oneWeek;
    }

    const renderStripeButton = userId && selectedProgramId && checked;
    console.log('this.props secure page', this.props.securePage, programFee);

    return (
      <div>
        <div className="secure-top">
          <SecureHeader name={name} />
        </div>
        <div className="secure-actions">
          <Icon size="big" name="lock" />
          <h4>1. Select Your Program Dates</h4>
          <h2>{dropDownTitle}</h2>
          <SecureProgramTable
            securePageData={securePage}
            handleWaitlist={this.handleWaitlist}
            handleEnroll={this.handleEnroll}
            programs={programs} />
          <DropDown
            placeholder={'Select Dates...'}
            fluid
            fields={programs}
            onChangeHandler={this.handleSelectProgramDropdown}
            dropdownType={SELECT_PROGRAM} />
          <p className={selectedProgramId || errors.selectedProgramId ? 'error-text-default' : 'error-text-visible'}>
            *Required: Select Program
                </p>
          <div id="secure-position">



            <Portal open={programSelected}>
              <Segment style={{
                position: 'fixed',
                left: 0,
                right: 0,
                top: '25%',
                marginLeft: 'auto',
                marginRight: 'auto',
                zIndex: '1000',
                width: '60%',
                textAlign: 'center',
                backgroundColor: 'rgba(250,250,250,.6)',
              }}
              >
                <div className="secure-your-position-container">
                  <Icon size="big" name="globe" />
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
                    enrollmentFee={ENROLLMENT_FEE}
                    programFee={programFee} />
                </div>
                <Checkout
                  validate={this.validate}
                  userId={userId}
                  selectedProgramId={this.state.selectedProgramId}
                  checked={this.state.checked}
                  handlePaymentSuccess={this.handlePaymentSuccess}
                  handlePaymentFail={this.handlePaymentFail}
                  renderStripeButton={renderStripeButton}
                  enrollmentFee={ENROLLMENT_FEE}
                  apiPath={apiPath}
                  campaign={campaign} />
                <p className={userId ? 'error-text-default' : 'error-text-visible'}>*Invalid User ID</p>
              </Segment>
            </Portal>





          </div>

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
            text-align: center;
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


// {programSelected && (<div>
//               <div className="secure-your-position-container">
//                 <Icon size="big" name="globe" />
//                 <h4>2. Secure Your Position</h4>
//                 <div className="checkbox-container">
//                   <CheckBox onCheckHandler={this.handleCheckParticipationAgreement} />
//                   <span className="participation-agreement-modal-container">
//                     <ParticipationAgreementModal />
//                   </span>
//                 </div>
//                 <p className={checked || errors.checked ? 'error-text-default' : 'error-text-visible'}>
//                   *Required: Read and Agree
//                       </p>
//                 <ProgramFeeList
//                   enrollmentFee={ENROLLMENT_FEE}
//                   programFee={programFee} />
//               </div>
//               <Checkout
//                 validate={this.validate}
//                 userId={userId}
//                 selectedProgramId={this.state.selectedProgramId}
//                 checked={this.state.checked}
//                 handlePaymentSuccess={this.handlePaymentSuccess}
//                 handlePaymentFail={this.handlePaymentFail}
//                 renderStripeButton={renderStripeButton}
//                 enrollmentFee={ENROLLMENT_FEE}
//                 apiPath={apiPath}
//                 campaign={campaign} />
//               <p className={userId ? 'error-text-default' : 'error-text-visible'}>*Invalid User ID</p>
//             </div>)}