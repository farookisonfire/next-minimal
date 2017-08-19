
import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/store';
import Layout from '../components/Layout';
import LandingPage from '../components/landing/LandingPage';

class Landing extends Component {
  render() {
    return (
      <Layout>
        <LandingPage />
      </Layout>
    );
  }
}

export default withRedux(initStore, null)(Landing);
