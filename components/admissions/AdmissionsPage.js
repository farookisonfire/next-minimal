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
      selectedProgram: 'serve',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event, data) {
    this.setState({ selectedProgram: data.value });
  }

  render() {
    return (
      <div>
        <div>
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
