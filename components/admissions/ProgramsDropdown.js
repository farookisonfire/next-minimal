import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const programs = [
  { key: 'youthEmpowerment', value: 'youthEmpowerment', text: 'Youth Empowerment' },
  { key: 'healthInnovation', value: 'healthInnovation', text: 'Health Innovation' },
  { key: 'education', value: 'education', text: 'Education' },
];

const ProgramsDropdown = ({ onProgramSelect }) => (
  <div className="admissions-programs-dropdown">
    <Dropdown
      onChange={onProgramSelect}
      defaultValue="youthEmpowerment"
      search={false}
      selection
      options={programs} />
    <style jsx>{`
       .admissions-programs-dropdown {
        text-align: center;
        margin-bottom: 50px;
      }
    `}</style>
  </div>
);

ProgramsDropdown.propTypes = {
  onProgramSelect: PropTypes.func.isRequired
};

export default ProgramsDropdown;
