import Navbar from './navbar/Navbar';
import Head from './Head';

const Layout = props => (
  <div>
    <Head />
    <Navbar pageName={props.pageName} />
    {props.children}
  </div>
);

export default Layout;
