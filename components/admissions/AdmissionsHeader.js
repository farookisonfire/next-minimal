import { Divider } from 'semantic-ui-react';

const AdmissionsHeader = () => (
  <div className="admissions-header">
    <h1>Become a Global Mentor</h1>
    <Divider />
    <style jsx>{`
      .admissions-header h1 {
      font-size: 36px;
      font-weight: 300;
      }

      @media (max-width: 768px) {
        .admissions-header h1 {
          font-size: 30px;
        }
      }
    `}</style>
  </div>
);

export default AdmissionsHeader;
