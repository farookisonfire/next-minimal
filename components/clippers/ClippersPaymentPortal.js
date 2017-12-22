import { Portal, Segment, Button, Message, Tab, Icon } from 'semantic-ui-react';
import Checkout from '../shared/Checkout';




const PaymentPortalContent = (props) => {
  const {
    sections = [],
    paymentPortalSelectSection = () => {},
    selectedSection,
    incrementTicketCount,
    decrementTicketCount,
    ticketCount,
  } = props;

  return (
    <div>
      <div style={{ marginTop: 24 }}>
        {sections.map((section) => {
          if (selectedSection === section.id) {
            return (
              <Message
                color="blue"
                key={`section-${section.id}`}
                style={{ margin: 8, cursor: 'pointer' }}
                onClick={() => paymentPortalSelectSection(section.id, section.tickets)}
                compact>
                <Message.Header>Section {section.section}</Message.Header>
                <p>{section.tickets} Tickets Left</p>
              </Message>
            );
          }
          return (
            <Message
              key={`section-${section.id}`}
              style={{ margin: 8, cursor: 'pointer' }}
              onClick={() => paymentPortalSelectSection(section.id, section.tickets)}
              compact>
              <Message.Header>Section {section.section}</Message.Header>
              <p>{section.tickets} Tickets Left</p>
            </Message>
          );
        })}
      </div>
      <div>
        <Button onClick={decrementTicketCount} style={{ margin: 2 }} icon>
          <Icon name="minus" />
        </Button>
        <Message compact>
          <p style={{ textAlign: 'center', fontSize: 18 }}>{ticketCount}</p>
        </Message>
        <Button onClick={incrementTicketCount} style={{ margin: 2 }} icon>
          <Icon name="plus" />
        </Button>
      </div>
      <div>
        <Message compact>
          ORDER TOTAL: $200
        </Message>
      </div>
      <div style={{ marginTop: 24 }}>
        <Checkout />
      </div>
    </div>
  );
};

const SeatChart = () => {
  return (
    <div>
      <img
        style={{ maxWidth: 500, padding: 24 }}
        alt="seat-chart"
        src="https://s3.amazonaws.com/minimal-spaces/staples-center-seating-chart.gif" />
    </div>
  );
};

const ClippersPaymentPortal = (props) => {
  const {
    closePaymentPortal = () => { },
    paymentPortalOpen,
    selectedCard,
    clippersTickets,
    paymentPortalSelectSection,
    selectedSection,
    ticketCount,
  } = props;

  const sectionsToRender = clippersTickets.filter(section => section.level === selectedCard);

  const panes = [
    {
      menuItem: 'Available',
      render: () => (
        <PaymentPortalContent
          paymentPortalSelectSection={paymentPortalSelectSection}
          sections={sectionsToRender}
          selectedSection={selectedSection}
          ticketCount={ticketCount} />),
    },
    { menuItem: 'Seat Map', render: () => <SeatChart /> },
  ];

  return (
    <div>
      <Portal open={paymentPortalOpen}>
        <Segment style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: '15%',
          marginLeft: 'auto',
          marginRight: 'auto',
          zIndex: '1000',
          width: '75%',
          minHeight: 500,
          textAlign: 'center',
          backgroundColor: 'rgba(250,250,250,.95)',
        }}>
          <div className="secure-your-position-container">
            <Button
              circular
              onClick={closePaymentPortal}
              style={{ position: 'absolute', right: 24, top: 24, cursor: 'pointer' }}
              icon="close" />
            <h2>Select Your Tickets</h2>
            <Tab panes={panes} />
          </div>
        </Segment>
      </Portal>
    </div>
  );
};

export default ClippersPaymentPortal;
