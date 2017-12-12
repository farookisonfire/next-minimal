import 'whatwg-fetch';
import getBaseUrl from '../lib/getBaseUrl';
import { fetchPrograms } from './programActions';
import { fetchApplicant } from './applicantActions';

export const SECURE_SELECT_ENROLL = 'SECURE_SELECT_ENROLL';
export const SECURE_SELECT_WAITLIST = 'SECURE_SELECT_WAITLIST';

export const secureSelectEnroll = (programSelected, selectedProgramId) => {
  return { type: SECURE_SELECT_ENROLL, programSelected, selectedProgramId };
};

export const secureSelectWaitlist = (openWaitlistPortal, selectedProgramId) => {
  console.log('action', openWaitlistPortal, selectedProgramId);
  return { type: SECURE_SELECT_WAITLIST, openWaitlistPortal, selectedProgramId };
};

export const addToWaitlist = (selectedProgramId, applicantId) => {
  return (dispatch) => {
    return fetch(`${getBaseUrl()}/secure/waitlist/${selectedProgramId}/${applicantId}`, {
      method: 'PUT',
    })
    .then((res) => {
      if (res.ok) {
        dispatch(fetchPrograms());
        dispatch(fetchApplicant(applicantId));
        return dispatch(secureSelectWaitlist(false));
      }
      throw new Error('unable to do something');
    })
    .catch((err) => {
      console.log(err);
    });
  };
};
