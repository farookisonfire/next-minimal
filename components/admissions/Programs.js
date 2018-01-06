import ProgramsDropdown from './ProgramsDropdown';
import HealthInnovation from './HealthInnovation';
import Education from './Education';
import YouthEmpowerment from './YouthEmpowerment';

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

export default Programs;
