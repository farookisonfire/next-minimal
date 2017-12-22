import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { fetchSections } from '../actions/clippersActions';
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
      ticketsAvailable: 0,
      ticketCount: 0,
      ticketPrice: 0,
      showSuccess: false,
    };

    this.handleCardSelect = this.handleCardSelect.bind(this);
    this.openPaymentPortal = this.openPaymentPortal.bind(this);
    this.closePaymentPortal = this.closePaymentPortal.bind(this);
    this.paymentPortalSelectSection = this.paymentPortalSelectSection.bind(this);
    this.incrementTicketCount = this.incrementTicketCount.bind(this);
    this.decrementTicketCount = this.decrementTicketCount.bind(this);
    this.resetSelectionSuccess = this.resetSelectionSuccess.bind(this);
  }

  componentDidMount() {
    this.props.fetchSections();
  }

  handleCardSelect(cardId) {
    this.setState({
      selectedCard: cardId,
      ticketCount: 0,
      ticketPrice: 0,
      ticketsAvailable: 0,
      selectedSection: undefined,
    });
  }

  openPaymentPortal() {
    console.log('open portal called');
    this.setState({ paymentPortal: true });
  }

  closePaymentPortal() {
    this.setState({
      selectedSection: undefined,
      ticketCount: 0,
      ticketPrice: 0,
      paymentPortal: false,
    });
  }

  paymentPortalSelectSection(sectionId, ticketsAvailable, ticketPrice) {
    this.setState({
      ticketCount: 0,
      selectedSection: sectionId,
      ticketsAvailable,
      ticketPrice,
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

  resetSelectionSuccess() {
    this.setState({
      selectedCard: undefined,
      selectedSection: undefined,
      ticketsAvailable: 0,
      ticketCount: 0,
      paymentPortal: false,
      showSuccess: true,
    });
  }

  render() {
    const {
      url = {},
      clippersTickets = [],
    } = this.props;

    const {
      selectedCard = '',
      paymentPortal = false,
      selectedSection,
      ticketCount,
      ticketsAvailable,
      ticketPrice,
      showSuccess,
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
          incrementTicketCount={this.incrementTicketCount}
          decrementTicketCount={this.decrementTicketCount}
          ticketCount={ticketCount}
          ticketsAvailable={ticketsAvailable}
          ticketPrice={ticketPrice}
          fetchSections={this.props.fetchSections}
          resetSelectionSuccess={this.resetSelectionSuccess}
          showSuccess={showSuccess}
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

export default withRedux(initStore, mapStateToProps, { fetchSections })(ClippersPage);
