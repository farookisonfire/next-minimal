import 'whatwg-fetch';
import getBaseUrl from '../lib/getBaseUrl';

export const RECEIVE_APPLICANT = 'RECEIVE_APPLICANT';

const receiveApplicant = (data) => {
  return { type: RECEIVE_APPLICANT, data };
};

export const fetchApplicant = (id) => {
  return (dispatch) => {
    return fetch(`${getBaseUrl()}/api/applicant/${id}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Unable to retrieve applicant data');
      })
      .then(applicantData => dispatch(receiveApplicant(applicantData)))
      .catch(err => console.log(err));
  };
};
