import { Component } from 'react';
import Layout from '../components/Layout';
import SecurePage from '../components/secure/SecurePage';

class Secure extends Component {
  render() {
    const { url = {} } = this.props;
    const { query = {} } = url;
    const {
      fn = '',
      id = '',
    } = query;

    return (
      <Layout>
        <SecurePage
          id={id}
          name={fn} />
      </Layout>
    );
  }
}

export default Secure;
