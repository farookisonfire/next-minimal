import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const sortByLength = (programs, length, selectedProgram) => {
  return programs.filter(program => program.length === length && program.typeId === selectedProgram);
};

function makeRow(program) {
  const {
    capacity = 20,
    confirmed = 0,
    enrolled = 0,
    manualClose = false,
  } = program;

  const cellColor = (confirmed + enrolled >= capacity || manualClose) ?
    '#FB605B' :
    'rgba(0,0,0,.87)';

  return (
    <Table.Row key={program.id}>
      <Table.Cell style={{ color: cellColor }}>{program.date}</Table.Cell>
    </Table.Row>
  );
}

function makeTable(programDates, header) {
  return (
    <div className="program-dates-tables">
      <Table compact collapsing textAlign='center' basic='very' columns={1} size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{header}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {programDates.map(makeRow)}
        </Table.Body>
      </Table>
      <style jsx>{`
          .program-dates-tables {
            display: inline-block;
            padding-left: 20px;
            padding-right: 20px;
            vertical-align: top;
          }
        `}</style>
    </div>
  );
}

const ProgramDates = ({ programs, selectedProgram }) => {
  const oneWeek = sortByLength(programs, '1 week', selectedProgram);
  const twoWeek = sortByLength(programs, '2 week', selectedProgram);
  const fourWeek = sortByLength(programs, '4 week', selectedProgram);

  return (
    <div>
      <div className="program-dates-header" id="dates">
        <h1>Dates</h1>
        <p className="program-dates-subheader">We are currently accepting applications for 2018. Positions are limited, apply today!</p>
        { programs.length ? <p className="table-legend">· Program Full</p> : null}
      </div>
      <div className="program-dates-table" style={{ textAlign: 'center' }}>
        {oneWeek.length ? makeTable(oneWeek, '1 week') : null}
        {twoWeek.length ? makeTable(twoWeek, '2 week') : null}
        {fourWeek.length ? makeTable(fourWeek, '4 week') : null}
      </div>
      <style jsx>{`
        .program-dates-table {
          margin-left: auto;
          margin-right: auto;
          width: 70%;
        }

        .program-dates-header {
          width: 42.5%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 24px;
          text-align: center;
        }

        .program-dates-header h1 {
          font-size: 40px;
          font-weight: 300;
          text-align: center;
          padding-top: 50px;
        }

        .program-dates-subheader {
          color: rgba(34,34,34,.7);
          font-size: 16px; 
          margin-top: 30px;
        }

        .table-legend {
          color: #FB605B;
          font-size: .8em;
          font-style: italic;
        }

         @media (max-width: 768px) {
           .program-dates-header h1 {
              font-size: 30px;
            }
         }
      `}</style>
    </div>
  );
};

ProgramDates.propTypes = {
  programs: PropTypes.array.isRequired,
  selectedProgram: PropTypes.string.isRequired
};

export default ProgramDates;
