import { RECEIVE_APPLICANT_DATA } from '../actions/confirmActions';

export default function confirmReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_APPLICANT_DATA:
      return Object.assign({}, state, action.applicantData);
    default:
      return state;
  }
}
