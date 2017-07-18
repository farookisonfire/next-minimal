import Layout from '../components/Layout'
import withRedux from 'next-redux-wrapper'
import initStore from '../store/store'
import ContactPage from '../components/contact/ContactPage'

const Contact = (props) => (
  <Layout pageName={props.url.pathname}>
    <ContactPage />
  </Layout>
)


export default withRedux(initStore)(Contact)