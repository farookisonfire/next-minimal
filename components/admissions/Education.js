import PropTypes from 'prop-types';
import EducationCircles from './EducationCircles';
import ProgramCost from './ProgramCost';
import ProgramDates from './ProgramDates';
import ApplyNow from './ApplyNow';
import Footer from '../footer/Footer';

const Education = (props) => {
  const {
    selectedProgram,
    programs,
  } = props;

  return (
    <div>
      <div className="admissions-programs-header">
        <h1>Education / Social Development</h1>
        <p>Our newest program specialization: designed for university undergraduate, graduate and postgraduate and postgraduate students between the ages of 18 and 25 interested in pursuing a career in Education, Social Work, or other related fields.  Though all three branches of OHS have a strong education component, members of the Education and Social Development program will engage with both theory and practice, developing themselves as culturally sensitive and responsive teachers, while exploring education as a driver for social change. </p>
        <p className="incepted-date">Incepted: 2017</p>
      </div>
      <div className="itinerary-container">
        <a className="itinerary-button" href="https://s3.amazonaws.com/minimal-spaces/2-week-Itinerary-YOUTH-EMPOWERMENT.pdf">
            Get Sample Itinerary
        </a>
      </div>
      <EducationCircles />
      <ProgramCost selectedProgram={selectedProgram} />
      <ProgramDates selectedProgram={selectedProgram} programs={programs} />
      <ApplyNow />
      <Footer />
      <style jsx>{`
        .admissions-programs-header {
          width: 60%;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .admissions-programs-header h1{
          font-size: 40px;
          font-weight: 300;
          text-align: center;
        }

        .incepted-date {
          text-align: left;
        }

        .admissions-programs-header p {
          color: rgba(34,34,34,.7);
          font-size: 16px;
          margin-top: 30px
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

Education.propTypes = {
  selectedProgram: PropTypes.string.isRequired,
  programs: PropTypes.array.isRequired
};

export default Education;
