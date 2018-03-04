import { Divider } from 'semantic-ui-react';
import { GRANT_ACCEPTED } from '../../lib/constants';

const resolveWaitlistPosition = (programId = '', programs = []) => {
  return programs.filter(program => program.id === programId);
};

const SecureHeader = (props) => {
  const {
    name = '',
    applicantData = {},
    programs = [],
    grant = '',
  } = props;

  const { status, selectedProgramId } = applicantData;
  
  let waitlistPosition;
  let header = 'Secure Your Position';
  let subheaderContent = (
    <div>
      <h1>{`We can't wait to meet you, ${name}!`}</h1>
      <p>
        Every year One Heart Source brings together a talented network of <strong>university students</strong> and <strong>young professionals</strong> in communities abroad to participate in <strong>transformational experiential learning</strong> programs. We are excited to welcome you to our global team!
      </p>
      <style jsx>{`
        h1 {
          margin-top: 30px;
          font-weight: 300;
          font-size: 24px;
        }

        p {
          color: rgba(34,34,34,.7);
          font-size: 16px;
          margin-bottom: 30px;
        }  
    `}</style>
    </div>);

  if (status === 'confirmed') header = 'Your Position is Secure!';
  if (status === 'waitlist' && grant !== GRANT_ACCEPTED) {
    const selectedProgram = resolveWaitlistPosition(selectedProgramId, programs);
    waitlistPosition = selectedProgram &&
      selectedProgram.length &&
      selectedProgram[0] &&
      selectedProgram[0].waitlist ?
      selectedProgram[0].waitlist.length :
      '';
    header = 'You are on the waitlist!';
    subheaderContent = (
      <div>
        <h1>{`Thanks for signing up, ${name}!`}</h1>
        <p>
          {`Your position on the waitlist is ${waitlistPosition}/10. Our team will reach out as soon as a position opens!`}
        </p>
        <style jsx>{`
          h1 {
            margin-top: 30px;
            font-weight: 300;
            font-size: 24px;
          }

          p {
            color: rgba(34,34,34,.7);
            font-size: 16px;
            margin-bottom: 30px;
          }  
      `}</style>
      </div>);
  }

  return (
    <div>
      <div className="secure-header">
        <h1>{header}</h1>
        <Divider />
      </div>
      <div className="secure-subheader">
        {subheaderContent}
      </div>
      <style jsx>{`
      .secure-header h1 {
        font-weight: 300;
        font-size: 36px;
        margin-bottom: 20px;
      }
      `}</style>
    </div>
  );
};

export default SecureHeader;
