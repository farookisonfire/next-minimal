import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import ProgramFeePaymentPage from '../components/programfee/ProgramFeePaymentPage';
import initStore from '../store/store';
import { getApplicantData, enrollPaymentPlan } from '../actions/confirmActions';
import { ENROLLMENT_FEE, FELLOWSHIP_ENROLLMENT_FEE } from '../lib/constants';
import NotFound from '../components/NotFound';

class Confirm extends Component {
  constructor() {
    super();

    this.state = {
      fellow: false,
    };
  }

  componentDidMount() {
    if (!location) {
      return;
    }

    const { getApplicantData } = this.props;

    const query = location.search;
    const parsed = queryString.parse(query);
    const {
      id = '',
      fellow = false,
   } = parsed;
    getApplicantData(id, fellow);

    this.setState({ fellow, id });
  }

  render() {
    const { fellow } = this.state;
    const userId = this.state.id || '';
    
    const {
      programFees = {},
      confirmApplicantData = {},
      errors = {},
      pageProfiles = {},
      enrollPaymentPlan = () => {},
    } = this.props;

    const {
     programDetails = {},
     applicantDetails = {},
    } = confirmApplicantData;

    const {
      typeId = '',
      lengthId = '',
    } = programDetails;

    const {
      discount = 0,
    } = applicantDetails;

    let programFee;
    if (!fellow) {
      programFee = programFees && programFees[typeId] && programFees[typeId][lengthId] ?
        programFees[typeId][lengthId] :
        '';
    } else {
      programFee = programFees && programFees.fellowship[typeId] && programFees[typeId][lengthId] ?
      programFees.fellowship[typeId][lengthId] :
      '';
    }

    const {
      programFeePage = {},
    } = pageProfiles;

    const enrollmentFee = fellow ?
      FELLOWSHIP_ENROLLMENT_FEE :
      ENROLLMENT_FEE;
    const programFeeTotal = programFee - parseInt(discount) - enrollmentFee;
    
    programDetails.programFee = programFeeTotal;

    const { message = '' } = errors;
    const renderPaymentPage = message !== 'Unable to retrieve applicant data';

    console.log('programFEePageDATA', programFeePage)

    return (
      <Layout>
        {userId && renderPaymentPage ?
        (
          <ProgramFeePaymentPage
            userId={userId}
            programDetails={programDetails}
            applicantDetails={applicantDetails}
            fellow={fellow}
            programFeePageData={programFeePage}
            enrollPaymentPlan={enrollPaymentPlan}
            />) :
          <NotFound />
          }
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps, { getApplicantData, enrollPaymentPlan })(Confirm);
