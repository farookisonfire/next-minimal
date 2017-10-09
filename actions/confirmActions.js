import 'whatwg-fetch';
import getBaseUrl from '../lib/getBaseUrl';

export const REQUEST_APPLICANT_DATA = 'REQUEST_APPLICANT_DATA';
export const RECEIVE_APPLICANT_DATA = 'RECEIVE_APPLICANT_DATA';
export const RECEIVE_APPLICANT_DATA_FAIL = 'RECEIVE_APPLICANT_DATA_FAIL';

const requestApplicantData = () => {
  return { type: REQUEST_APPLICANT_DATA };
};

const receiveApplicantData = (applicantData) => {
  return { type: RECEIVE_APPLICANT_DATA, applicantData };
};

const receiveApplicantDataFail = (err) => {
  return { type: RECEIVE_APPLICANT_DATA_FAIL, err };
};

export const getApplicantData = (id, fellow) => {
  return (dispatch) => {
    dispatch(requestApplicantData());
    return fetch(`${getBaseUrl()}/confirm/${id}/${fellow}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Unable to retrieve applicant data');
      })
      .then(applicantData => dispatch(receiveApplicantData(applicantData)))
      .catch(err => dispatch(receiveApplicantDataFail(err)));
  };
};
