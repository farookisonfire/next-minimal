import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const programs = [
  { key: 'education', value: 'education', text: 'Education & International Development' },
  { key: 'healthInnovation', value: 'healthInnovation', text: 'Health Innovation' },
];

const ProgramsDropdown = ({ onProgramSelect }) => (
  <div className="admissions-programs-dropdown">
    <Dropdown
      onChange={onProgramSelect}
      defaultValue="education"
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
