import { Grid, Icon } from 'semantic-ui-react';

const EducationCircles = () => (
  <div className="admissions-programs-circles">
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
        <Icon circular size='huge' name='book' />
        <h4>Mentor Youth</h4>
        <p>Empower youth through small-group academic mentorship and extra-curricular activities.</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='huge' name='idea' />
        <h4>Experience Cultural Immersion</h4>
        <p>Meet activists, leaders, and innovators and broaden your understanding of the cultural context your working in.</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='huge' name='globe' />
        <h4>Cultivate Global Perspecitve</h4>
        <p>Engage in meaningful dialogue, seminars, and panel discussions with our international team and network.</p>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    <style jsx>{`
        .admissions-programs-circles {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          margin-top: 70px;
          margin-bottom: 50px;
          width: 70%; 
        }

        .admissions-programs-circles p {
          color: rgba(34,34,34,.7);
        }
    `}</style>
  </div>
);

export default EducationCircles;