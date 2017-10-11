import { Divider } from 'semantic-ui-react';

const AdmissionsHeader = () => (
  <div>
    <div className="admissions-header">
      <h1>Become a Global Mentor</h1>
      <h1 className="styled-header">Cape Town, South Africa</h1>
    </div>
    <Divider />
    <div className="admissions-subheader">
      <h1>Service-learning, immersion, and international collaboration with a global team.</h1>
    </div>
    <style jsx>{`
      .admissions-header {
        display: flex;
      }
      
      .admissions-header h1 {
        font-size: 36px;
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 0;
      }

      .admissions-subheader h1 {
        margin-top: 30px;
        font-weight: 300;
        font-size: 24px;
      }

      .styled-header {
        margin-left: 8px;
        color: rgb(250,95,91);
      }

      @media (max-width: 768px) {
        .admissions-header {
          flex-direction: column;
        }
        
        .admissions-header h1 {
          font-size: 30px;
        }

        .styled-header {
          margin: 0;
        }
      }
    `}</style>
  </div>
);

export default AdmissionsHeader;
