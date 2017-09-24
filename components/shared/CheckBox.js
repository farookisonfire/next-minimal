import { Checkbox } from 'semantic-ui-react';

const CheckBox = (props) => {
  const {
    label = '',
    onCheckHandler = () => {},
  } = props;

  return (
    <Checkbox
      onChange={onCheckHandler}
      label={label}
      style={{ display: 'inline-block' }} />
  );
};

export default CheckBox;
