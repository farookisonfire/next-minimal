import PropTypes from 'prop-types';
import HealthInnovationCircles from './HealthInnovationCircles';
import ProgramCost from './ProgramCost';
import ProgramDates from './ProgramDates';
import ApplyNow from './ApplyNow';
import Footer from '../footer/Footer';

const HealthInnovation = ({selectedProgram, programs}) => (
  <div>
    <div className="admissions-programs-header">
      <h1>Health Innovation</h1>
      <p>Our fastest-growing program:  A pre-Health internship designed for university undergraduate and postgraduate students aged 18-25 who are pursuing a career in health related fields.  The purpose of the OHS Health Innovation program is to democratize healthy living, and to this end, members of the OHS Health Innovation team engage with various levels of the local community on pressing issues related to community health.  These engagements include youth mentorship, field work, visitation with local organizations and institutions, and seminars, in order to gain access to experiential learning in a global context</p>
      <p>Ideal for students planning to apply to medical school, nursing school, and other health degree programs.</p>
      <p className="incepted-date">Incepted: 2014</p>
    </div>
    <div className="itinerary-container">
      <a className="itinerary-button" href="https://s3.amazonaws.com/minimal-spaces/1-week-Itinerary-HEALTH-INNOVATION.pdf">
          Get Sample Itinerary
      </a>
    </div>
    <HealthInnovationCircles />
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

HealthInnovation.propTypes = {
  selectedProgram: PropTypes.string.isRequired,
  programs: PropTypes.array.isRequired
};

export default HealthInnovation;