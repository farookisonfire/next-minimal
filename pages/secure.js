import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import SecurePage from '../components/secure/SecurePage';
import NotFound from '../components/NotFound';
import initStore from '../store/store';
import { fetchPrograms } from '../actions/programActions';

class Secure extends Component {
  constructor() {
    super();

    this.state = {
      fn: '',
      userId: '',
      programTypeId: '',
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
    } = parsed;

    this.setState({
      fn,
      userId: id,
      programTypeId,
    });
  }

  render() {
    const {
      programs = [],
      programFees = {},
    } = this.props;

    const {
      fn = '',
      userId = '',
      programTypeId = '',
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
            programs={programDatesToRender}
            programTypeId={this.state.programTypeId}
            programFees={programFeesToUse}
            apiPath={pagename} />) :
          <NotFound />
          }
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps, { fetchPrograms })(Secure);
