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
    } = this.props;

    const {
      programTypeId = '',
    } = this.state;

    const programDatesToRender = programs.filter(program => program.value === programTypeId);

    return (
      <Layout>
        <SecurePage
          userId={this.state.userId}
          name={this.state.fn}
          programs={programDatesToRender}
          programTypeId={this.state.programTypeId} />
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps)(Secure);
