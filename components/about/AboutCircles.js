import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';


const AboutCircles = () => (
  <div className="about-circles">
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
        <Icon circular size='big' name='star' />
        <h4>Credibility</h4>
        <p>Top rated non-profit</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='big' name='medkit' />
        <h4>Safety</h4>
        <p>Secondary</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='big' name='users' />
        <h4>Network</h4>
        <p>An international community of high performers</p>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Icon circular size='big' name='heart' />
          <h4>Hands-on</h4>
          <p>Meaningful work</p>
        </Grid.Column>
        <Grid.Column>
          <Icon circular size='big' name='child' />
          <h4>Competitive Advantage</h4>
          {/* child, student */}
          <p>International experience and perspective</p>
        </Grid.Column>
        <Grid.Column>
          <Icon circular size='big' name='tree' />
          <h4>Growth</h4>
          <p>Building yourself and the community</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <style jsx>{`
      .about-circles {
        text-align: center;
        margin-top: 50px;
        margin-bottom: 60px;
      }

      .about-circles p {
        color: rgba(34,34,34,.7);
      }
    `}</style>
  </div>
);

export default AboutCircles;