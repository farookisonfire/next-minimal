import { RECEIVE_SECTIONS } from '../actions/clippersActions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SECTIONS:
      return action.sections;
    default:
      return state;
  }
};
