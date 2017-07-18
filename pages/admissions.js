import Layout from '../components/Layout'
import withRedux from 'next-redux-wrapper'
import initStore from '../store/store'
import AdmissionsPage from '../components/admissions/AdmissionsPage'

const Admissions = (props) => (
  <Layout pageName={props.url.pathname}>
    <AdmissionsPage />
  </Layout>
)

const mapStateToProps = (state) => state

export default withRedux(initStore, mapStateToProps)(Admissions)