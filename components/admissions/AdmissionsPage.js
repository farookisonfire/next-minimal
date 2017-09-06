import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';
import AdmissionsHeader from './AdmissionsHeader';
import AdmissionsStep from './AdmissionsStep';
import Programs from './Programs';

class Admissions extends Component {
  constructor() {
    super();

    this.state = {
      selectedProgram: 'education',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event, data) {
    this.setState({ selectedProgram: data.value });
  }

  render() {
    return (
      <div>
        <div className="admissions-header-background">
          <div className="admissions-top">
            <AdmissionsHeader />
          </div>
        </div>
        <div>
          <AdmissionsStep />
          <Programs
            onProgramSelect={this.onChange}
            selectedProgram={this.state.selectedProgram}
            programs={this.props.programs} />
        </div>
        <style jsx>{`
          .admissions-top {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          padding-top: 100px;
          }

          .admissions-header-background {
          background-image: url('https://s3.amazonaws.com/minimal-spaces/cape-sunset.jpeg');
          background-size: cover;
          background-position: center;
          height: 300px;
          }
        `}</style>
      </div>
    );
  }
}

Admissions.propTypes =  {
  programs: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  const {
    programs = [],
  } = state;

  return {
    programs,
  };
};

export default connect(mapStateToProps)(Admissions);
