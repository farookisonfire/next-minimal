import React from 'react';
import PropTypes from 'prop-types';
import ProgramCostTable from './ProgramCostTable';
import ProgramCostIncluded from './ProgramCostIncluded';
import ProgramCostNotIncluded from './ProgramCostNotIncluded';

const ProgramCost = ({selectedProgram}) => (
  <div className="program-cost">
    <ProgramCostTable selectedProgram={selectedProgram}/>
    <ProgramCostIncluded />
    <ProgramCostNotIncluded />
    <style jsx>{`
        .program-cost {
        background-color: rgb(247,247,247);
        text-align: center;
      }

      .program-cost h1 {
        font-size: 40px;
        font-weight: 300;
        text-align: center;
        padding-top: 50px;
      }

      .program-cost p {
        color: rgba(34,34,34,.7);
        font-size: 16px; 
        margin-top: 30px
      }
    `}</style>
  </div>
);

ProgramCost.propTypes = {
  selectedProgram: PropTypes.string.isRequired
};

export default ProgramCost;