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
