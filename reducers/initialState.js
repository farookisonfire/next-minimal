import {
  HEALTH_PROGRAM_TYPE_ID,
  SERVE_PROGRAM_TYPE_ID,
  HEALTH_2_WEEK_FEE,
  HEALTH_4_WEEK_FEE,
  SERVE_2_WEEK_FEE,
  SERVE_4_WEEK_FEE,
  FELLOWSHIP_HEALTH_2_WEEK_FEE,
  FELLOWSHIP_HEALTH_4_WEEK_FEE,
  FELLOWSHIP_SERVE_2_WEEK_FEE,
  FELLOWSHIP_SERVE_4_WEEK_FEE,
} from '../lib/constants';

export const programFees = {
  healthInnovation: {
    twoWeek: HEALTH_2_WEEK_FEE,
    fourWeek: HEALTH_4_WEEK_FEE,
  },
  serve: {
    twoWeek: SERVE_2_WEEK_FEE,
    fourWeek: SERVE_4_WEEK_FEE,
  },
  fellowship: {
    healthInnovation: {
      twoWeek: FELLOWSHIP_HEALTH_2_WEEK_FEE,
      fourWeek: FELLOWSHIP_HEALTH_4_WEEK_FEE,
    },
    serve: {
      twoWeek: FELLOWSHIP_SERVE_2_WEEK_FEE,
      fourWeek: FELLOWSHIP_SERVE_4_WEEK_FEE,
    },
  },
};

export const programs = [
  {
    id: 'serve-4-may28-june22',
    value: SERVE_PROGRAM_TYPE_ID,
    type: 'Serve a Million',
    length: '4 week',
    date: 'May 28 - June 22',
    enrolled: 0,
  },
  {
    id: 'serve-4-july16-august10',
    value: SERVE_PROGRAM_TYPE_ID,
    type: 'Serve a Million',
    length: '4 week',
    date: 'July 16 - August 10',
    enrolled: 0,
  },
  {
    id: 'serve-2-may28-june8',
    value: SERVE_PROGRAM_TYPE_ID,
    type: 'Serve a Million',
    length: '2 week',
    date: 'May 28 - June 8',
    enrolled: 0,
  },
  {
    id: 'serve-2-june11-june22',
    value: SERVE_PROGRAM_TYPE_ID,
    type: 'Serve a Million',
    length: '2 week',
    date: 'June 11 - June 22',
    enrolled: 0,
  },
  {
    id: 'serve-2-june25-july6',
    value: SERVE_PROGRAM_TYPE_ID,
    type: 'Serve a Million',
    length: '2 week',
    date: 'June 25 - July 6',
    enrolled: 0,
  },
  {
    id: 'serve-2-july16-july27',
    value: SERVE_PROGRAM_TYPE_ID,
    type: 'Serve a Million',
    length: '2 week',
    date: 'July 16 - July 27',
    enrolled: 0,
  },
  {
    id: 'serve-2-july30-august10',
    value: SERVE_PROGRAM_TYPE_ID,
    type: 'Serve a Million',
    length: '2 week',
    date: 'July 30 - August 10',
    enrolled: 0,
  },
  {
    id: 'serve-2-august13-august24',
    value: SERVE_PROGRAM_TYPE_ID,
    type: 'Serve a Million',
    length: '2 week',
    date: 'August 13 - August 24',
    enrolled: 0,
  },
  {
    id: 'health-4-may28-june22',
    value: HEALTH_PROGRAM_TYPE_ID,
    type: 'Health Innovation',
    length: '4 week',
    date: 'May 28 - June 22',
    enrolled: 0,
  },
  {
    id: 'health-4-july16-august10',
    value: HEALTH_PROGRAM_TYPE_ID,
    type: 'Health Innovation',
    length: '4 week',
    date: 'July 16 - August 10',
    enrolled: 0,
  },
  {
    id: 'health-2-may28-june8',
    value: HEALTH_PROGRAM_TYPE_ID,
    type: 'Health Innovation',
    length: '2 week',
    date: 'May 28 - June 8',
    enrolled: 0,
  },
  {
    id: 'health-2-june11-june22',
    value: HEALTH_PROGRAM_TYPE_ID,
    type: 'Health Innovation',
    length: '2 week',
    date: 'June 11 - June 22',
    enrolled: 0,
  },
  {
    id: 'health-2-june25-july6',
    value: HEALTH_PROGRAM_TYPE_ID,
    type: 'Health Innovation',
    length: '2 week',
    date: 'June 25 - July 6',
    enrolled: 0,
  },
  {
    id: 'health-2-july16-july27',
    value: HEALTH_PROGRAM_TYPE_ID,
    type: 'Health Innovation',
    length: '2 week',
    date: 'July 16 - July 27',
    enrolled: 0,
  },
  {
    id: 'health-2-july30-august10',
    value: HEALTH_PROGRAM_TYPE_ID,
    type: 'Health Innovation',
    length: '2 week',
    date: 'July 30 - August 10',
    enrolled: 0,
  },
];

export const pageProfiles = {
  fellowship: {
    pagename: 'fellowship',
    radioButtons: [
      { label: 'Youth Empowerment', value: SERVE_PROGRAM_TYPE_ID },
      { label: 'Health Innovation', value: HEALTH_PROGRAM_TYPE_ID },
    ],
  },
};
