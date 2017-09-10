import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const programs = [
  { id: 1, value: 'youthEmpowerment', text: 'Youth Empowerment', length: '1 week', cost: '$1550' },
  { id: 2, value: 'youthEmpowerment', text: 'Youth Empowerment', length: '2 week', cost: '$3400' },
  { id: 3, value: 'youthEmpowerment', text: 'Youth Empowerment', length: '4 week', cost: '$5000' },
  { id: 4, value: 'healthInnovation', text: 'Health Innovation', length: '2 week', cost: '$3800' },
  { id: 5, value: 'healthInnovation', text: 'Health Innovation', length: '4 week', cost: '$5400' },
  { id: 6, value: 'serve', text: 'Serve a Million', length: '2 week', cost: '$3400' },
  { id: 7, value: 'serve', text: 'Serve a Million', length: '4 week', cost: '$5000' },
];

const ProgramCostTable = ({ selectedProgram }) => {

  const makeRow = (program) => {
    if (program.value === selectedProgram) {
      return (
        <Table.Row key={program.id}>
          <Table.Cell>{program.text}</Table.Cell>
          <Table.Cell>{program.length}</Table.Cell>
          <Table.Cell>{program.cost}</Table.Cell>
        </Table.Row>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="program-cost-header" id="cost">
        <h1>Program Fee</h1>
        <p>Tax deductible up to 88% for US residents, the program fee is not refundable. Members have the option making a single payment upon acceptance, or several monthly payments while fundraising.</p>
      </div>
      <div className="program-cost-table">
        <Table textAlign="center" columns={3} basic="very" size="small">
          <Table.Body>
            {programs.map(makeRow)}
          </Table.Body>
        </Table>
      </div>
      <style jsx>{`
        .program-cost-header {
          width: 42.5%;
          margin-left: auto;
          margin-right: auto;
        }

        .program-cost-table {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          margin-top: 50px;
          width: 70%;
        }

        .program-cost-header h1 {
          font-size: 40px;
          font-weight: 300;
          text-align: center;
          padding-top: 50px;
        }

        .program-cost-header p {
          color: rgba(34,34,34,.7);
          font-size: 16px; 
          margin-top: 30px
        
        }
        @media (max-width: 768px) {
          .program-cost-header h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

ProgramCostTable.propTypes = {
  selectedProgram: PropTypes.string.isRequired
}

export default ProgramCostTable;
