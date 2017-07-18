import React from 'react';

const ProgramCostNotIncluded = () => (
  <div className="program-cost-not-included-header">
    <h1>Not Included</h1>
    <p><strong> Airfare,  travel insurance,  passport, </strong> and <strong>visa</strong> (for non US-citizens) are not included in the program fee but are required for participation.</p>
    <style jsx>{`
      .program-cost-not-included-header {
        width: 42.5%;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 70px;
      }
      .program-cost-not-included-header h1 {
          font-size: 40px;
          font-weight: 300;
          text-align: center;
          padding-top: 50px;
        }

      .program-cost-not-included-header p {
        color: rgba(34,34,34,.7);
        font-size: 16px; 
        margin-top: 30px
      }
    `}</style>
  </div>
);

export default ProgramCostNotIncluded;
