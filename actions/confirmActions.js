import 'whatwg-fetch';
import getBaseUrl from '../lib/getBaseUrl';

export const REQUEST_APPLICANT_DATA = 'REQUEST_APPLICANT_DATA';
export const RECEIVE_APPLICANT_DATA = 'RECEIVE_APPLICANT_DATA';

const requestApplicantData = () => {
  return { type: REQUEST_APPLICANT_DATA };
};

const receiveApplicantData = (applicantData) => {
  return { type: RECEIVE_APPLICANT_DATA, applicantData };
};

export const getApplicantData = (id) => {
  console.log('get applicants thunk called with id: ', id);
  return (dispatch) => {
    dispatch(requestApplicantData());
    return fetch(`${getBaseUrl()}/confirm/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Couldn\'t fetch applicant data.');
      })
      .then(applicantData => dispatch(receiveApplicantData(applicantData)))
      .catch(err => console.log(err));
  };
};
