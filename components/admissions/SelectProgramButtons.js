import React from 'react';

const SelectProgram = (props) => {
  const {
    handleSelectProgram = () => {},
    selectedProgram = '',
  } = props;

  return (
    <div>
      <div className="select-program-btn-container">
        <button
          onClick={() => handleSelectProgram('youthEmpowerment')}
          className={selectedProgram === 'youthEmpowerment' ?
            'select-program-btn selected' :
            'select-program-btn'
        }>Youth Empowerment</button>
        <button
          onClick={() => handleSelectProgram('healthInnovation')}
          className={selectedProgram === 'healthInnovation' ?
            'select-program-btn selected' :
            'select-program-btn'
        }>Health Innovation</button>
        <button
          onClick={() => handleSelectProgram('education')}
          className={selectedProgram === 'education' ?
            'select-program-btn selected' :
            'select-program-btn'
        }>Education / Social Work</button>
        <button
          onClick={() => handleSelectProgram('crossWorldMedics')}
          className={selectedProgram === 'crossWorldMedics' ?
            'select-program-btn selected' :
            'select-program-btn'
        }>Medical Internship</button>
      </div>
      <style jsx>{`
        .select-program-btn-container {
          margin-top: 32px;
          margin-bottom: 48px;
        }

        .select-program-btn {
          width: 25%;
          padding: 20px;
          background-color: rgba(50,50,50,.8);
          color: white;
        }

        .selected {
          transition-duration: .2s;
          background-color: rgb(250,95,91);
          color: white;
        }

        button:focus {
          outline: 0px;
        }

        @media (max-width: 768px) {
          .select-program-btn {
            width: 100%;
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default SelectProgram;
