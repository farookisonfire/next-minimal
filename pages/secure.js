import { Component } from 'react';
import queryString from 'query-string';
import Layout from '../components/Layout';
import SecurePage from '../components/secure/SecurePage';

class Secure extends Component {
  constructor() {
    super();

    this.state = {
      fn: '',
      id: '',
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
    } = parsed;

    this.setState({ fn, id });
  }

  render() {
    return (
      <Layout>
        <SecurePage
          id={this.state.id}
          name={this.state.fn} />
      </Layout>
    );
  }
}

export default Secure;
