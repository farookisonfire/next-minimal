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
    backgroundColor: 'rgba(250,250,250,1)',
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
  },
  priceText: {
    fontSize: 48,
  },
  descriptionContainer: {
    marginBottom: 16,
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
    priceText,
    cardIcon,
    descriptionContainer,
  } = styles;

  return (

    <Card style={selectedCard === id ? cardSelected : card} onClick={() => handleCardSelect(id)}>
      <Card.Content>
        <Card.Header>
          {header}
          <Icon size="large" style={cardIcon} name={icon} />
        </Card.Header>
        <Card.Meta>
          {subtitle}
        </Card.Meta>
        <Card.Description>
          <div style={priceContainer}>
            <span style={priceText}>${ticketPrice}</span>
            <span>/ ticket</span>
          </div>
          <div style={descriptionContainer}>
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

{/*<Card>
      <Card.Content header={header} />
      <Card.Content description={description} />
      <Card.Content extra>
        <Button basic>Get Tickets</Button>
      </Card.Content>
    </Card>*/}