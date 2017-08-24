
import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/store';
import Layout from '../components/Layout';
import HomePage from '../components/homepage/HomePage';

class Landing extends Component {
  render() {
    return (
      <Layout>
        <HomePage />
      </Layout>
    );
  }
}

export default withRedux(initStore, null)(Landing);
