import { List } from 'semantic-ui-react';

const ProgramFeeList = (props) => {
  const {
    programFee,
    enrollmentFee = '',
  } = props;

  return (
    <List size={'small'} divided style={{ marginTop: 0, marginBottom: 16 }}>
      <List.Item>
        <List.Content>
          <p>Program Fee: {programFee ? `$${programFee}` : ''}</p>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <p>Due Today: ${enrollmentFee}</p>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default ProgramFeeList;
