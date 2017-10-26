import 'whatwg-fetch';
import getBaseUrl from '../lib/getBaseUrl';

export const REQUEST_PROGRAMS = 'REQUEST_PROGRAMS';
export const RECEIVE_PROGRAMS = 'RECEIVE_PROGRAMS';

const requestPrograms = () => {
  return { type: REQUEST_PROGRAMS };
};

const receivePrograms = (programs) => {
  return { type: RECEIVE_PROGRAMS, programs };
};

export const fetchPrograms = () => {
  return (dispatch) => {
    dispatch(requestPrograms());
    return fetch(`${getBaseUrl()}/api/initial-data/programs`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Unable to retrieve programs');
      })
      .then(programs => dispatch(receivePrograms(programs)))
      .catch((err) => {
        console.log('Error retrieving initial program data ', err);
      });
  };
};
