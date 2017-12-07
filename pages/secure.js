import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import SecurePage from '../components/secure/SecurePage';
import NotFound from '../components/NotFound';
import initStore from '../store/store';
import { fetchPrograms } from '../actions/programActions';
import { secureSelectEnroll } from '../actions/secureActions';

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
    this.props.fetchPrograms();

    const query = location.search;
    const parsed = queryString.parse(query);
    const {
      fn = '',
      id = '',
      programTypeId = '',
      campaign = '',
    } = parsed;

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
    } = this.props;

    const {
      fn = '',
      userId = '',
      programTypeId = '',
      campaign = '',
    } = this.state;


    const programDatesThatMatchType = programs.filter(program => program.typeId === programTypeId);
    const programDatesToRender = programDatesThatMatchType.filter(program =>
      !program.manualClose && (program.enrolled + program.confirmed) < program.capacity);

    const programFeesToUse = programFees[programTypeId];
    const pagename = 'secure';

    return (
      <Layout>
        {fn && userId && programTypeId ?
        (
          <SecurePage
            userId={this.state.userId}
            name={this.state.fn}
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

export default withRedux(initStore, mapStateToProps, { fetchPrograms, secureSelectEnroll })(Secure);
