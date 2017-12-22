import ClippersPageHeader from './ClippersPageHeader';
import ClippersPageBody from './ClippersPageBody';
import ClippersPaymentPortal from './ClippersPaymentPortal';

const ClippersPageContent = (props) => {
  const {
    selectedCard,
    handleCardSelect,
    openPaymentPortal,
    closePaymentPortal,
    paymentPortalOpen,
    clippersTickets,
    paymentPortalSelectSection,
    selectedSection,
    incrementTicketCount,
    decrementTicketCount,
    ticketCount,
    ticketsAvailable,
    ticketPrice,
    fetchSections,
    resetSelectionSuccess,
    showSuccess,
  } = props;

  return (
    <div className="background">
      <div className="overlay">
        <div className="clippers-page-content">
          <ClippersPageHeader />
          <ClippersPageBody
            selectedCard={selectedCard}
            handleCardSelect={handleCardSelect}
            openPaymentPortal={openPaymentPortal}
            showSuccess={showSuccess}
          />
          <ClippersPaymentPortal
            paymentPortalSelectSection={paymentPortalSelectSection}
            selectedSection={selectedSection}
            selectedCard={selectedCard}
            paymentPortalOpen={paymentPortalOpen}
            closePaymentPortal={closePaymentPortal}
            clippersTickets={clippersTickets}
            incrementTicketCount={incrementTicketCount}
            decrementTicketCount={decrementTicketCount}
            ticketCount={ticketCount}
            ticketsAvailable={ticketsAvailable}
            ticketPrice={ticketPrice}
            fetchSections={fetchSections}
            resetSelectionSuccess={resetSelectionSuccess}
          />
        </div>
      </div>
      <style jsx>{`
      .background {
        background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
        height: 100%;
        overflow: hidden;
      }
      .clippers-page-content {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
        padding-top: 100px
      }
    `}</style>
    </div>
  );
};

export default ClippersPageContent;
