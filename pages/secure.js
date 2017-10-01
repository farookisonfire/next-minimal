import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import SecurePage from '../components/secure/SecurePage';

import initStore from '../store/store';

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

    const programDatesToRender = programs.filter(program => program.value === programTypeId);
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
          null
          }
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps)(Secure);
