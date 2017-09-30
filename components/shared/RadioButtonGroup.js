import React from 'react';
import { Radio } from 'semantic-ui-react';

const RadioButtonGroup = (props) => {
  const {
    buttons = [],
    handleRadioOnChange = () => {},
    selectedProgramType = '',
  } = props;

  const buttonsToRender = buttons.map((button) => {
    const {
      label = '',
      value = '',
    } = button;

    const checked = value === selectedProgramType;

    return (
      <Radio
        key={`radio-${label}-${value}`}
        label={label}
        value={value}
        onChange={handleRadioOnChange}
        checked={checked}
        style={{ fontSize: 12 }} />
    );
  });

  return (
    <div >
      {buttonsToRender}
    </div>
  );
};

export default RadioButtonGroup;
