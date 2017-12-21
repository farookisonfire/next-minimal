import ClippersPageHeader from './ClippersPageHeader';
import ClippersPageBody from './ClippersPageBody';

const ClippersPageContent = (props) => {
  const {
    selectedCard,
    handleCardSelect,
  } = props;

  return (
    <div className="background">
      <div className="overlay">
        <div className="clippers-page-content">
          <ClippersPageHeader />
          <ClippersPageBody
            selectedCard={selectedCard}
            handleCardSelect={handleCardSelect}
          />
        </div>
      </div>
      <style jsx>{`
      .background {
        background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
        height: 100%;
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
