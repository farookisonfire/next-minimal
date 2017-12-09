import { RECEIVE_APPLICANT } from '../actions/applicantActions';

export default (state = {}, action) => {
  console.log('reducer', action.data)
  switch (action.type) {
    case RECEIVE_APPLICANT:
      return action.data;
    default:
      return state;
  }
};
