import PropTypes from 'prop-types';
import YouthEmpowermentCircles from './YouthEmpowermentCircles';
import ProgramCost from './ProgramCost';
import ProgramDates from './ProgramDates';
import ApplyNow from './ApplyNow';
import Footer from '../footer/Footer';

const YouthEmpowerment = ({ selectedProgram, programs }) => (
  <div>
    <div className="admissions-programs-header">
      <h1>Youth Empowerment</h1>
      <p>Designed for university undergraduate, graduate and postgraduate students of various disciplines between the ages of 18 and 25, the Youth Empowerment, the Youth Empowerment program brings global mentors to work with the students of the OHS GIFTED Community in Cape Town, South Africa.  The Greatness Initiative for Township Educational Development (GIFTED) is an education initiative designed to empower young people through education, founded by OHS in the Cape Town township of Imizamo Yethu in 2012.</p>
      <p>Youth Empowerment mentors work with students to improve their general Math and English Literacy skills, while also focusing on other areas of the Arts, sports, and life skills.</p>
      <p className="incepted-date">Incepted: 2012</p>
    </div>
    <div className="itinerary-container">
      <a className="itinerary-button" href="https://s3.amazonaws.com/minimal-spaces/2-week-Itinerary-YOUTH-EMPOWERMENT.pdf">
          Get Sample Itinerary
      </a>
    </div>
    <YouthEmpowermentCircles />
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

YouthEmpowerment.propTypes = {
  selectedProgram: PropTypes.string.isRequired,
  programs: PropTypes.array.isRequired
};

export default YouthEmpowerment;
