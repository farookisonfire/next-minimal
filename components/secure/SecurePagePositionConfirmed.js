import { Divider } from 'semantic-ui-react';

const SecurePagePositionConfirmed = (props) => {
  const {
    allPrograms = [],
    applicantData = {},
    name = '',
  } = props;

  const { selectedProgramId } = applicantData;

  const selectedProgramMatch = allPrograms.filter(program => program.id === selectedProgramId);
  const selectedProgram = selectedProgramMatch && selectedProgramMatch.length ?
    selectedProgramMatch[0] :
    {};

  const {
    type,
    length,
    date,
  } = selectedProgram;

  const selectedProgramString = `${type} ${length} ${date}`;

  console.log('SECUREPAGEPOSITIONCONFIRMED', applicantData);
  return (
    <div>
      <div className="secure-top">
        <div className="secure-header">
          <h1>Your Position Is Secure!</h1>
          <Divider />
        </div>
        <div className="secure-subheader">
          <h1>{`We can't wait to meet you, ${name}!`}</h1>
          <p>Every year One Heart Source brings together a talented network of <strong>university students</strong> and <strong>young professionals</strong> in communities abroad to participate in <strong>transformational experiential learning</strong> programs. We are excited to welcome you to our global team!</p>
        </div>
        <div className="secure-selected-program">
          <h4>Your Program:</h4>
          <h1>{type}</h1>
          <h2>{date}</h2>
        </div>
      </div>
      <style jsx>{`
      .secure-top {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        margin-bottom: 50px;
      }
      
      .secure-header h1 {
        font-weight: 300;
        font-size: 36px;
        margin-bottom: 20px;
      }

      .secure-subheader h1 {
        margin-top: 30px;
        font-weight: 300;
        font-size: 24px;
      }

      .secure-subheader p {
        color: rgba(34,34,34,.7);
        font-size: 16px;
        margin-bottom: 30px;
      }

      .secure-selected-program {
        text-align: center;
      }

      .secure-selected-program h1, h2, h4 {
        margin: 0;
      }

      .secure-selected-program h2 {
        font-weight: 300;
      }
      `}</style>
    </div>
  );
};

export default SecurePagePositionConfirmed;
