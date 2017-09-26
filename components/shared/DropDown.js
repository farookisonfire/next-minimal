import { Dropdown } from 'semantic-ui-react';
import { SELECT_PROGRAM } from '../../lib/constants';

const DropDown = (props) => {
  const {
    onChangeHandler = () => {},
    fields = [],
    dropdownType = '',
    fluid = false,
    placeholder = '',
  } = props;

  const fieldsToUse = [];
  if (dropdownType === SELECT_PROGRAM) {
    fields.map((field) => {
      const fieldToUse = {};
      fieldToUse.text = `[${field.length}] - ${field.date}`;
      fieldToUse.value = field.id;
      fieldToUse.key = `secure-dropdown-field-${field.id}`;
      return fieldsToUse.push(fieldToUse);
    });
  }

  return (
    <Dropdown
      placeholder={placeholder}
      fluid={fluid}
      onChange={onChangeHandler}
      search={false}
      selection
      options={fieldsToUse} />
  );
};

export default DropDown;
