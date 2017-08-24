import { Component } from 'react';
import VidLoop from './VidLoop';
import HeaderPrimary from '../landing/HeaderPrimary';
import HeaderSecondary from '../landing/HeaderSecondary';
import HeaderTertiary from '../landing/HeaderTertiary';


class HomePage extends Component {
  render() {
    return (
      <div>
        <VidLoop />
        <HeaderPrimary />
        <HeaderSecondary />
        <HeaderTertiary />
      </div>
    );
  }
}

export default HomePage;
