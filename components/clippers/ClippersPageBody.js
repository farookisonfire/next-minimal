import { Message } from 'semantic-ui-react';
import ClippersCard from './ClippersCard';

const clipperCards = [
  {
    id: 1,
    header: 'Level 1',
    subtitle: 'Support Education',
    description: 'Sit in the 100’s section. 100% of ticket prices go towards sponsoring one of our student’s education!',
    ticketPrice: 250,
    icon: 'book',
  },
  {
    id: 2,
    header: 'Level 2',
    subtitle: 'Support Health',
    description: 'Sit in the 200’s section. 100% of ticket prices go towards sponsoring the medical costs of our students!',
    ticketPrice: 100,
    icon: 'heartbeat',
  },
  {
    id: 3,
    header: 'Level 3',
    subtitle: 'Support Empowerment',
    description: 'Sit in the OHS section with staff and volunteers. 100% of ticket prices go towards sending vulnerable girls in Tanzania to school!',
    ticketPrice: 42,
    icon: 'graduation',
  },
];

const ClippersPageBody = (props) => {
  const {
    selectedCard,
    handleCardSelect,
    openPaymentPortal = () => {},
    showSuccess,
  } = props;

  const clippersCardsToRender = clipperCards.map((card) => {
    return (
      <ClippersCard
        selectedCard={selectedCard}
        handleCardSelect={handleCardSelect}
        key={`clippers-card-${card.id}`}
        {...card}
      />
    );
  });

  return (
    <div>
      <div className="card-container">
        { clippersCardsToRender }
      </div>
      <div className="button-container">
        <button
          onClick={openPaymentPortal}
          className="get-tickets-btn">GET TICKETS</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Message
          compact
          color="green"
          hidden={!showSuccess}>
          Thank you! Our team will email you shortly with your tickets.
        </Message>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }
        .button-container {
          margin-top: 48px;
          text-align: center;
        }
        .get-tickets-btn {
          width: 250px;
          border-radius: 2px;
          background-color: rgb(250,95,91);
          padding: 12px 16px;
          color: white;
        }
        .get-tickets-btn:hover {
          background-color: rgba(250,95,91,.8);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ClippersPageBody;
