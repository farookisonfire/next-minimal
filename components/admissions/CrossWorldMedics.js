import ProgramCost from './ProgramCost';
import ProgramDates from './ProgramDates';
import ApplyNow from './ApplyNow';

const CrossWorldMedics = (props) => {
  const { selectedProgram } = props;

  return (
    <div>
      <div className="admissions-programs-header">
        <h1>Medical: Cross World Medics Internship</h1>
        <p>Our mission is to create the highest quality medical programs in the world to accelerate the careers of our interns and uplift the communities we serve. By integrating elements across disciplines we are able to design unparallelled experiences that incorporate specialty shadowing, health innovation and technology, and community health development in some of the most beautiful yet underserved locations in the world. </p>
        <p>By joining Cross World Medics you are becoming a member of one of the fastest growing medical networks in the World. A tribe of doctors, health professionals, and mentors dedicated to overcoming the global health challenges of the 21st century.</p>
        <p>Ideal for students planning to apply to medical school, nursing school, and other health degree programs.</p>
      </div>
      <ProgramCost selectedProgram={selectedProgram} />
      <ProgramDates selectedProgram={selectedProgram} />
      <ApplyNow />
      <style jsx>{`
      .admissions-programs-header {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 48px;
        text-align: center;
      }

      .admissions-programs-header h1{
        font-size: 40px;
        font-weight: 300;
        text-align: center;
      }

      .admissions-programs-header p {
        color: rgba(34,34,34,.7);
        font-size: 16px; 
        margin-top: 30px
      }

      .incepted-date {
        text-align: left;
      }

      .itinerary-container {
        margin-top: 32px;
        margin-bottom: 64px;
        text-align: center;
      }

      .itinerary-button {
        padding: 15px 20px;
        color: white;
        cursor: pointer;
        background: rgb(250,95,91);
      }

      @media (max-width: 768px) {
        .admissions-programs-header h1{
          font-size: 30px;
        }
      }
      `}</style>
    </div>
  );
};

export default CrossWorldMedics;
