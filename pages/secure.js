import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import SecurePage from '../components/secure/SecurePage';
import NotFound from '../components/NotFound';
import initStore from '../store/store';
import { fetchPrograms } from '../actions/programActions';
import { secureSelectEnroll, addToWaitlist, secureSelectWaitlist } from '../actions/secureActions';
import { fetchApplicant } from '../actions/applicantActions';

class Secure extends Component {
  constructor() {
    super();

    this.state = {
      fn: '',
      userId: '',
      programTypeId: '',
      campaign: '',
    };
  }

  componentDidMount() {
    if (!location) {
      return;
    }

    const query = location.search;
    const parsed = queryString.parse(query);
    const {
      fn = '',
      id = '',
      programTypeId = '',
      campaign = '',
    } = parsed;
    
    this.props.fetchPrograms();
    this.props.fetchApplicant(id);

    this.setState({
      fn,
      userId: id,
      programTypeId,
      campaign,
    });
  }

  render() {
    const {
      programs = [],
      programFees = {},
      secureSelectEnroll = () => {},
      securePage = {},
      applicantData = {},
      addToWaitlist = () => {},
      secureSelectWaitlist = () => {},
    } = this.props;

    const {
      fn = '',
      userId = '',
      programTypeId = '',
      campaign = '',
    } = this.state;

    const programDatesThatMatchType = programs.filter(program => program.typeId === programTypeId);
    const programFeesToUse = programFees[programTypeId];
    const pagename = 'secure';

    console.log('programDatesThatMatchType', programDatesThatMatchType);

    return (
      <Layout>
        {fn && userId && programTypeId ?
        (
          <SecurePage
            fetchApplicant={() => this.props.fetchApplicant(userId)}
            applicantData={applicantData}
            userId={this.state.userId}
            name={this.state.fn}
            allPrograms={programs}
            programs={programDatesThatMatchType}
            programTypeId={this.state.programTypeId}
            campaign={campaign}
            programFees={programFeesToUse}
            apiPath={pagename}
            secureSelectEnroll={secureSelectEnroll}
            addToWaitlist={addToWaitlist}
            secureSelectWaitlist={secureSelectWaitlist}
            securePage={securePage} />) :
          <NotFound />
          }
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps, {
  fetchPrograms,
  secureSelectEnroll,
  fetchApplicant,
  secureSelectWaitlist,
  addToWaitlist,
})(Secure);
