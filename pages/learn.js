import Layout from '../components/Layout'
import withRedux from 'next-redux-wrapper'
import initStore from '../store/store';
import AboutPage from '../components/about/AboutPage';

const Admissions = (props) => (
  <Layout pageName={props.url.pathname}>
    <AboutPage />
  </Layout>
)

export default withRedux(initStore)(Admissions)