import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout';
import initStore from '../store/store';
import AdmissionsPage from '../components/admissions/AdmissionsPage';
import { fetchPrograms } from '../actions/programActions';

class Admissions extends Component {
  componentDidMount() {
    this.props.fetchPrograms();
  }

  render() {
    return (
      <Layout pageName={this.props.url.pathname}>
        <AdmissionsPage />
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default withRedux(initStore, mapStateToProps, { fetchPrograms })(Admissions);
