import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const styles = {
  card: {
    margin: 0,
    maxWidth: 240,
    backgroundColor: 'rgba(250,250,250,.1)',
  },
  cardSelected: {
    maxWidth: 240,
    backgroundColor: 'rgba(255,255,255,1)',
    boxShadow: 'rgba(0, 0, 0, 0.5) 5px 5px 10px',
    margin: '-24px -16px',
    zIndex: 10,
  },
  cardIcon: {
    position: 'absolute',
    right: 24,
  },
  priceContainer: {
    margin: '32px 0px',
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
  },
  priceContainerSelected: {
    1: { color: '#ED174C', margin: '32px 0px', textAlign: 'center' },
    2: { color: '#006BB6', margin: '32px 0px', textAlign: 'center' },
    3: { margin: '32px 0px', textAlign: 'center' },
  },
  priceText: {
    fontSize: 48,
  },
  descriptionContainer: {
    marginBottom: 16,
    color: 'rgba(220,220,220,1)',
  },
  descriptionContainerSelected: {
    marginBottom: 16,
  },
  cardHeader: {
    color: 'rgba(255,255,255,1)',
  },
  cardHeaderSelected: {
    1: { color: '#ED174C' },
    2: { color: '#006BB6' },
    3: {},
  },
  cardSubtitle: {
    color: 'rgba(220,220,220,1)',
  },
  cardSubtitleSelected: {
  },
};

const ClippersCard = (props) => {
  const {
    id = '',
    header = '',
    subtitle = '',
    ticketPrice = '',
    description = '',
    icon = '',
    selectedCard,
    handleCardSelect,
  } = props;

  const {
    card,
    cardSelected,
    priceContainer,
    priceContainerSelected,
    priceText,
    cardIcon,
    descriptionContainer,
    descriptionContainerSelected,
    cardHeader,
    cardHeaderSelected,
    cardSubtitle,
    cardSubtitleSelected,
  } = styles;

  return (

    <Card style={selectedCard === id ? cardSelected : card} onClick={() => handleCardSelect(id)}>
      <Card.Content>
        <Card.Header style={selectedCard === id ? cardHeaderSelected[id] : cardHeader}>
          {header}
          <Icon size="large" style={cardIcon} name={icon} inverted={selectedCard !== id} />
        </Card.Header>
        <Card.Meta style={selectedCard === id ? cardSubtitleSelected : cardSubtitle}>
          {subtitle}
        </Card.Meta>
        <Card.Description>
          <div style={selectedCard === id ? priceContainerSelected[id] : priceContainer}>
            <span style={priceText}>${ticketPrice}</span>
            <span>/ ticket</span>
          </div>
          <div style={selectedCard === id ? descriptionContainerSelected : descriptionContainer}>
            {description}
          </div>
        </Card.Description>
      </Card.Content>
      <style jsx>{`
        .card-selected {
          maxWidth: 248;
          background-color: rgba(250,250,250,1);
          box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 10px;
          margin: 16px;
          z-index: 10;
        }
        .card {
          margin: 0;
          maxWidth: 248;
          backgroundColor: rgba(250,250,250,.1);
        }
      `}</style>
    </Card>
  );
};

export default ClippersCard;
