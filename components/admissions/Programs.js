import PropTypes from 'prop-types';
import ProgramsDropdown from './ProgramsDropdown';
import YouthEmpowerment from './YouthEmpowerment';
import HealthInnovation from './HealthInnovation';
import Education from './Education';

const Programs = ({onProgramSelect, selectedProgram, programs}) => {

const selected = (programValue) => {
  switch(programValue) {
    case 'education':
      return <Education selectedProgram={selectedProgram} programs={programs}/>;
    case 'healthInnovation':
      return <HealthInnovation selectedProgram={selectedProgram} programs={programs}/>;
    default:
      return <YouthEmpowerment selectedProgram={selectedProgram} programs={programs}/>;
  }
};

return (
  <div>
    <ProgramsDropdown onProgramSelect={onProgramSelect}/>
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