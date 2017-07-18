import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';

const ProgramCostIncluded = () => (
  <div className="program-cost-included">
    <div className="program-cost-included-header">
    <h1>Included</h1>
    <p>One Heart Source methodically designs experiences that connect, educate, and inspire. Our programs are safe and meaningful, and include:</p>
    </div>
  <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
        <Icon circular size='big' name='food' />
        <h4>Food and Drink</h4>
        <p>Delicious local and international cuisine</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='big' name='home' />
        <h4>Accommodation </h4>
        <p>Secure, modern, fully-furnished apartment-style units</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='big' name='shield' />
        <h4>Safety and Security</h4>
        <p>24-hour on-call support for health emergency. On-call security at accommodation</p>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        <Icon circular size='big' name='camera retro' />
        <h4>Cultural Excursions</h4>
        <p>Trips to broaden your cultural understanding</p>
      </Grid.Column>
        <Grid.Column>
        <Icon circular size='big' name='heart' />
        <h4>Full-time In-country Leadership</h4>
        <p>Our international staff all have previous experience abroad</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='big' name='compass' />
        <h4>On-site Orientation</h4>
        <p>On-site training sessions to ramp you up quickly and effectively</p>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
         <Grid.Column>
        <Icon circular size='big' name='bus' />
        <h4>In-country Transportation</h4>
        <p>Airport pick-up and drop-off, and all program-related trips</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='big' name='mobile' />
        <h4>Internet and Mobile Phone</h4>
        <p>Easily communicate domestically and internationally</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='big' name='pencil' />
        <h4>Mentorship Supplies</h4>
        <p>Teaching and art supplies</p>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    <style jsx>{`
      .program-cost-included-header {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
      }

      .program-cost-included {
        text-align: center;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
      }

      .program-cost-included h1 {
          font-size: 40px;
          font-weight: 300;
          text-align: center;
          padding-top: 50px;
        }

        .program-cost-included p {
          color: rgba(34,34,34,.7);
          font-size: 16px; 
          margin-top: 30px
        }
    `}</style>
    </div>
);

export default ProgramCostIncluded;