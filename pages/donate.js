import Layout from '../components/Layout'
import withRedux from 'next-redux-wrapper'
import initStore from '../store/store'
import DonatePage from '../components/donate/DonatePage'

const Donate = (props) => (
  <Layout pageName={props.url.pathname}>
    <DonatePage />
  </Layout>
)


export default withRedux(initStore)(Donate)