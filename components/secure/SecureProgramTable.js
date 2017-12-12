import React from 'react';
import { Table, Button, Label } from 'semantic-ui-react';
import { determineProgramStatus } from '../../lib/utils';
import { PROGRAM_STATUS } from '../../lib/constants';

const {
  CLOSED_WAITLIST_FULL,
  FULL_WAITLIST_OPEN,
  FULL_WAITLIST_CLOSED,
} = PROGRAM_STATUS;

const resolveProgramStatusAndButton = (
  programStatus,
  program,
  buttonActions,
  securePageData,
) => {
  const { waitlist, id } = program;
  const { handleEnroll, handleWaitlist } = buttonActions;
  const {
    programSelected = false,
    openWaitlistPortal = false,
  } = securePageData;

  switch (programStatus) {
    case CLOSED_WAITLIST_FULL:
      return ({
        status: (<Label color="red" horizontal>Closed</Label>),
        action: null,
      });
    case FULL_WAITLIST_CLOSED:
      return ({
        status: (<Label color="red" horizontal>Full</Label>),
        action: null,
      });
    case FULL_WAITLIST_OPEN:
      return ({
        status: (<Label color="orange" horizontal>{`Waitlist ${waitlist.length}/10`}</Label>),
        action: (<Button
          disabled={programSelected || openWaitlistPortal}
          onClick={() => handleWaitlist(id)}
          color="orange"
          inverted>Join Waitlist</Button>),
      });
    default:
      return ({
        status: (<Label color="green" horizontal>Open</Label>),
        action: (<Button
          disabled={programSelected || openWaitlistPortal}
          active={false}
          onClick={handleEnroll}
          color="green"
          id={id}
          inverted>Enroll</Button>),
      });
  }
};

const SecureProgramTable = (props) => {
  const {
    programs = [],
    handleEnroll,
    handleWaitlist,
    securePageData,
  } = props;

  const programsToRender = programs.map((program) => {
    const programStatus = determineProgramStatus(program);
    const programLabelAndButton = resolveProgramStatusAndButton(
      programStatus,
      program,
      { handleEnroll, handleWaitlist },
      securePageData,
      );
    const { status, action } = programLabelAndButton;

    return (
      <Table.Row key={program.id} style={{ textAlign: 'center' }}>
        <Table.Cell>{program.length}</Table.Cell>
        <Table.Cell>{program.date}</Table.Cell>
        <Table.Cell>{status}</Table.Cell>
        <Table.Cell>{action}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <div>
      <Table>
        <Table.Body>
          {programsToRender}
        </Table.Body>
      </Table>
    </div>
  );
};

export default SecureProgramTable;
