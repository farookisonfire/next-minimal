import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import initStore from '../store/store';
import AboutPage from '../components/about/AboutPage';

class Admissions extends Component {
  render() {
    const {
      url = {},
      faqs = [],
    } = this.props;

    const { pathname } = url;

    return (
      <Layout pageName={pathname}>
        <AboutPage
          faqs={faqs} />
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps)(Admissions);
