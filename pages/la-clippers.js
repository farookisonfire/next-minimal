import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/store';
import Layout from '../components/Layout';
import ClippersPageContent from '../components/clippers/ClippersPageContent';

class ClippersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCard: '',
    };

    this.handleCardSelect = this.handleCardSelect.bind(this);
  }

  handleCardSelect(cardId) {
    this.setState({ selectedCard: cardId });
  }

  render() {
    const {
      url = {},
    } = this.props;

    const {
      selectedCard = '',
    } = this.state;

    return (
      <Layout pageName={url.pathname}>
        <ClippersPageContent
          selectedCard={selectedCard}
          handleCardSelect={this.handleCardSelect} />
      </Layout>
    );
  }
}

export default withRedux(initStore)(ClippersPage);
