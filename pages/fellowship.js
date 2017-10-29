import { Component } from 'react';
import queryString from 'query-string';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import FellowshipPaymentPage from '../components/fellowship/FellowshipPaymentPage';
import NotFound from '../components/NotFound';
import initStore from '../store/store';
import { fetchPrograms } from '../actions/programActions';

class Fellowship extends Component {
  constructor() {
    super();

    this.state = {
      fn: '',
      ln: '',
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
      ln = '',
    } = parsed;

    this.setState({
      fn,
      ln,
    });
  }

  render() {
    const {
      programs = [],
      programFees = {},
      pageProfiles = {},
    } = this.props;

    const fellowshipPageData = pageProfiles.fellowship || {};
    const { pagename } = fellowshipPageData;
    const fellowshipProgramFees = programFees.fellowship || {};
    const { fn = '' } = this.state;

    const programDatesToRender = programs.filter(program =>
      !program.manualClose && (program.enrolled + program.confirmed) < program.capacity);

    return (
      <Layout>
        {fn ?
        (
          <FellowshipPaymentPage
            name={{ fn: this.state.fn, ln: this.state.ln }}
            programs={programDatesToRender}
            programFees={fellowshipProgramFees}
            fellowshipPageData={fellowshipPageData}
            apiPath={pagename} />) :
          <NotFound />
          }
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps, { fetchPrograms })(Fellowship);
