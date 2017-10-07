import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import ProgramFeePaymentPage from '../components/programfee/ProgramFeePaymentPage';
import initStore from '../store/store';
import { getApplicantData } from '../actions/confirmActions';
import { ENROLLMENT_FEE, FELLOWSHIP_ENROLLMENT_FEE } from '../lib/constants';

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
    getApplicantData(id);

    this.setState({ fellow, id });
  }

  render() {
    const { fellow } = this.state;
    const userId = this.state.id || '';
    
    const {
      // programs = [],
      programFees = {},
      // pageProfiles = {},
      confirmApplicantData = {},
    } = this.props;

    const {
     programDetails = {},
     applicantDetails = {},
    } = confirmApplicantData;

    const {
      id = '',
      type = '',
      typeId = '',
      length = '',
      lengthId = '',
      date = '',
    } = programDetails;

    const discount = applicantDetails.discount ? applicantDetails.discount : 0;
    const programFee = programFees && programFees[typeId] && programFees[typeId][lengthId] ? programFees[typeId][lengthId] : '';
    const enrollmentFee = fellow ? FELLOWSHIP_ENROLLMENT_FEE : ENROLLMENT_FEE;
    const programFeeLessDiscountAndEnrollmentFee = programFee - parseInt(discount) - enrollmentFee;
    programDetails.programFee = programFeeLessDiscountAndEnrollmentFee;

    console.log('programf ees', programFees);
    console.log('confirmApplicantData', confirmApplicantData);

    
    // const fellowshipPageData = pageProfiles.fellowship || {};
    // const { pagename } = fellowshipPageData;
    // const fellowshipProgramFees = programFees.fellowship || {};

    return (
      <Layout>
        {true ?
        (
          <ProgramFeePaymentPage
            userId={userId}
            programDetails={programDetails}
            // name={{ fn: this.state.fn, ln: this.state.ln }}
            programs={[]}
            // programFees={fellowshipProgramFees}
            // fellowshipPageData={fellowshipPageData}
            // apiPath={pagename}
            />) :
          null
          }
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps, { getApplicantData })(Confirm);
