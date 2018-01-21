import PropTypes from 'prop-types';
import ProgramsDropdown from './ProgramsDropdown';
import HealthInnovation from './HealthInnovation';
import Education from './Education';
import YouthEmpowerment from './YouthEmpowerment';
import CrossWorldMedics from './CrossWorldMedics';

const Programs = (props) => {
  const {
    onProgramSelect,
    selectedProgram,
    programs,
  } = props;

  const selected = (programValue) => {
    switch (programValue) {
      case 'healthInnovation':
        return <HealthInnovation selectedProgram={selectedProgram} programs={programs} />;
      case 'education':
        return <Education selectedProgram={selectedProgram} programs={programs} />;
      case 'crossWorldMedics':
        return <CrossWorldMedics selectedProgram={selectedProgram} programs={programs} />;
      default:
        return <YouthEmpowerment selectedProgram={selectedProgram} programs={programs} />;
    }
  };

  return (
    <div>
      <ProgramsDropdown onProgramSelect={onProgramSelect} />
      {selected(selectedProgram)}
    </div>
  );
};

Programs.propTypes = {
  onProgramSelect: PropTypes.func.isRequired,
  selectedProgram: PropTypes.string.isRequired,
  programs: PropTypes.array.isRequired
};

export default Programs;