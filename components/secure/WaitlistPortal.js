import React from 'react';
import { Portal, Segment, Button } from 'semantic-ui-react';

const WaitlistPortal = (props) => {
  const {
    openWaitlistPortal = false,
    handleWaitlistPortalAction = () => {},
    selectedProgramId = '',
    applicantData = {},
   } = props;

  const { _id } = applicantData;

  return (
    <Portal open={openWaitlistPortal}>
      <div>
        <Segment style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: '25%',
          marginLeft: 'auto',
          marginRight: 'auto',
          zIndex: '1000',
          width: '75%',
          textAlign: 'center',
          backgroundColor: 'rgba(250,250,250,.95)',
        }}
        >
          <div className="waitlist-content-container">
            <h2>Join the Waitlist</h2>
            <p>{'Confirm to be added to the waitlist. Once your position becomes available, our team will reach out to notify you. You\'ll have three days to secure your position!'}</p>
            <div className="waitlist-content-buttons">
              <Button onClick={() => handleWaitlistPortalAction()}>Cancel</Button>
              <Button onClick={() => handleWaitlistPortalAction(selectedProgramId, _id)}>Confirm</Button>
            </div>
          </div>
        </Segment>
        <style jsx>{`
          .waitlist-content-container {
              margin: 24px auto 0 auto;
              text-align: center;
          }
          .waitlist-content-container h2 {
            font-weight: 300;
            font-size: 28px;
          }
          .waitlist-content-buttons {
            display: flex;
            justify-content: flex-end;
          }
        `}</style>
      </div>
    </Portal>
  );
};

export default WaitlistPortal;
