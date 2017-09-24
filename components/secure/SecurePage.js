import { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import SecureHeader from './SecureHeader';
import Checkout from './Checkout';
import Footer from '../footer/Footer';
import DropDown from '../shared/DropDown';
import CheckBox from '../shared/CheckBox';
import {
  SELECT_PROGRAM,
  HEALTH_PROGRAM_TYPE_ID,
} from '../../lib/constants';
import ParticipationAgreementModal from './ParticipationAgreementModal';

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
    };

    this.handleSelectProgramDropdown = this.handleSelectProgramDropdown.bind(this);
    this.handleCheckParticipationAgreement = this.handleCheckParticipationAgreement.bind(this);
    this.validate = this.validate.bind(this);
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

  render() {
    const {
      userId,
      name,
      programs,
      programTypeId,
    } = this.props;

    const {
      errors = {},
      selectedProgramId,
      checked,
    } = this.state;

    const dropDownTitle = programTypeId === HEALTH_PROGRAM_TYPE_ID ?
      'Health Innovation' :
      'Serve a Million';

    return (
      <div>
        <div className="secure-top">
          <SecureHeader name={name} />
        </div>
        <div className="secure-actions">
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Icon size="big" name="lock" />
                <h4>Select Your Program Dates</h4>
                <h2>{dropDownTitle}</h2>
                <DropDown
                  fields={programs}
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
                    <h4>Secure Your Position</h4>
                    <div className="checkbox-container">
                      <CheckBox onCheckHandler={this.handleCheckParticipationAgreement} />
                      <span className="participation-agreement-modal-container">
                        <ParticipationAgreementModal />
                      </span>
                    </div>
                    <p className={checked || errors.checked ? 'error-text-default' : 'error-text-visible'}>*Required: Read and Agree</p>
                  </div>
                  <Checkout
                    validate={this.validate}
                    userId={userId}
                    selectedProgramId={this.state.selectedProgramId}
                    checked={this.state.checked} />
                  <p className={userId ? 'error-text-default' : 'error-text-visible'}>*Invalid User ID</p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
          <div className="secure-payment-container">
            
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
            margin-bottom: 16px;
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
