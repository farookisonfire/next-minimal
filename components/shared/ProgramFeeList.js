import { List } from 'semantic-ui-react';

const ProgramFeeList = (props) => {
  const {
    programFee,
    enrollmentFee = '',
    asteriskText = false,
  } = props;

  return (
    <List size={'small'} divided style={{ marginTop: 0, marginBottom: 16 }}>
      <List.Item>
        <List.Content>
          <p>Program Fee{asteriskText ? '*' : ''}: {programFee ? `$${programFee}` : ''}</p>
          <p style={{ fontSize: 12, fontStyle: 'italic' }}>{asteriskText}</p>
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
