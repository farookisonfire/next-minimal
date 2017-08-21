import React from 'react'
import { Icon, Statistic } from 'semantic-ui-react';

const AboutStatistics = () => (
  <Statistic.Group widths='four' className="about-statistics" style={{paddingTop: 50, paddingBottom: 60}}>
    <Statistic style={{margin: '35px auto' }}>
      <Statistic.Value>50,000</Statistic.Value>
      <Statistic.Label>Service Hours</Statistic.Label>
    </Statistic>

    <Statistic style={{margin: '35px auto' }}>
      <Statistic.Value text>
        Fifteen
        <br />Thousand
      </Statistic.Value>
      <Statistic.Label>Applicants</Statistic.Label>
    </Statistic>

    <Statistic style={{margin: '35px auto' }}>
      <Statistic.Value>
        <Icon name='student' />
        120
      </Statistic.Value>
      <Statistic.Label>Universities</Statistic.Label>
    </Statistic>

    <Statistic style={{margin: '35px auto' }}>
      <Statistic.Value>
        1000+
      </Statistic.Value>
      <Statistic.Label>Members</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

export default AboutStatistics;