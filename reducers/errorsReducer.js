import {
  RECEIVE_APPLICANT_DATA,
  RECEIVE_APPLICANT_DATA_FAIL,
} from '../actions/confirmActions';

export default function errorsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_APPLICANT_DATA_FAIL:
      return Object.assign({}, state, { message: action.err.message });
    case RECEIVE_APPLICANT_DATA:
      return {};
    default:
      return state;
  }
}
