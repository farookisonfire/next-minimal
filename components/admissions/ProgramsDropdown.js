import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const programs = [
  { key: 'serve', value: 'serve', text: 'Serve a Million' },
  { key: 'healthInnovation', value: 'healthInnovation', text: 'Health Innovation' },
];

const ProgramsDropdown = ({ onProgramSelect }) => (
  <div className="admissions-programs-dropdown">
    <Dropdown
      onChange={onProgramSelect}
      defaultValue="serve"
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
