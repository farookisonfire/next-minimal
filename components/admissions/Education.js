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
        <h1>Education & International Development</h1>
        <p>Designed for university undergraduate and postgraduate students interested in the art of teaching, OHS Education is our newest specialization. All OHS programs have a strong education-based component; the OHS Education program takes this to the next level. Members will engage with both theory and practice, developing themselves as culturally sensitive and responsive teachers, while exploring education as a driver for social change. Development of OHS Education is led by OHS staff with and Dr. Tabetha Bernstein of Kutztown University. </p>
      </div>
      <EducationCircles />
      <ProgramCost selectedProgram={selectedProgram} />
      <ProgramDates selectedProgram={selectedProgram} programs={programs} />
      <ApplyNow />
      <Footer />
      <style jsx>{`
        .admissions-programs-header {
          width: 50%;
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
      }`}</style>
    </div>
  );
};

Education.propTypes = {
  selectedProgram: PropTypes.string.isRequired,
  programs: PropTypes.array.isRequired
};

export default Education;
