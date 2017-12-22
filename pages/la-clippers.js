import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/store';
import Layout from '../components/Layout';
import ClippersPageContent from '../components/clippers/ClippersPageContent';

class ClippersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCard: 2,
      selectedSection: undefined,
      paymentPortal: false,
      ticketsAvailable: undefined,
      ticketCount: 0,
    };

    this.handleCardSelect = this.handleCardSelect.bind(this);
    this.openPaymentPortal = this.openPaymentPortal.bind(this);
    this.closePaymentPortal = this.closePaymentPortal.bind(this);
    this.paymentPortalSelectSection = this.paymentPortalSelectSection.bind(this);
    this.incrementTicketCount = this.incrementTicketCount.bind(this);
    this.decrementTicketCount = this.decrementTicketCount.bind(this);
  }

  handleCardSelect(cardId) {
    this.setState({ selectedCard: cardId });
  }

  openPaymentPortal() {
    this.setState({ paymentPortal: true });
  }

  closePaymentPortal() {
    this.setState({ paymentPortal: false });
  }

  paymentPortalSelectSection(sectionId, ticketsAvailable) {
    this.setState({
      selectedSection: sectionId,
      ticketsAvailable,
    });
  }

  incrementTicketCount() {
    const { ticketCount } = this.state;
    const newCount = ticketCount + 1;
    this.setState({ ticketCount: newCount });
  }
  
  decrementTicketCount() {
    const { ticketCount } = this.state;
    const newCount = ticketCount - 1;
    this.setState({ ticketCount: newCount });
  }

  render() {
    const {
      url = {},
      clippersTickets = [],
      incrementTicketCount = () => {},
      decrementTicketCount = () => {},
    } = this.props;

    const {
      selectedCard = '',
      paymentPortal = false,
      selectedSection,
      ticketCount,
    } = this.state;

    return (
      <Layout pageName={url.pathname}>
        <ClippersPageContent
          selectedCard={selectedCard}
          handleCardSelect={this.handleCardSelect}
          openPaymentPortal={this.openPaymentPortal}
          closePaymentPortal={this.closePaymentPortal}
          paymentPortalOpen={paymentPortal}
          clippersTickets={clippersTickets}
          paymentPortalSelectSection={this.paymentPortalSelectSection}
          selectedSection={selectedSection}
          incrementTicketCount={incrementTicketCount}
          decrementTicketCount={decrementTicketCount}
          ticketCount={ticketCount}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { clippersTickets = [] } = state;
  return {
    clippersTickets,
  };
};

export default withRedux(initStore, mapStateToProps)(ClippersPage);
