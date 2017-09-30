import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import FellowshipPaymentPage from '../components/fellowship/FellowshipPaymentPage';

import initStore from '../store/store';

class Fellowship extends Component {
  constructor() {
    super();

    this.state = {
      fn: '',
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
    } = parsed;

    this.setState({
      fn,
    });
  }

  render() {
    const {
      programs = [],
      programFees = {},
      pageProfiles = {},
    } = this.props;

    const fellowshipPageData = pageProfiles.fellowship || {};
    const fellowshipProgramFees = programFees.fellowship || {};
    const { fn = '' } = this.state;

    return (
      <Layout>
        {fn ?
        (
          <FellowshipPaymentPage
            name={this.state.fn}
            programs={programs}
            programFees={fellowshipProgramFees}
            fellowshipPageData={fellowshipPageData} />) :
          null
          }
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps)(Fellowship);
