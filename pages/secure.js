import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import SecurePage from '../components/secure/SecurePage';
import NotFound from '../components/NotFound';
import initStore from '../store/store';
import { fetchPrograms } from '../actions/programActions';
import { secureSelectEnroll } from '../actions/secureActions';
<<<<<<< HEAD
import { fetchApplicant } from '../actions/applicantActions';

=======
>>>>>>> b2854997f9c98776db230c6faf41efdd69b13355

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

    console.log('SECURE.js PROPS >', this.props);

    return (
      <Layout>
        {fn && userId && programTypeId ?
        (
          <SecurePage
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
            securePage={securePage} />) :
          <NotFound />
          }
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps, {
  fetchPrograms, secureSelectEnroll, fetchApplicant,
})(Secure);
