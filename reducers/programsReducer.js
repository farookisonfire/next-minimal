import { programs } from './initialState';
import { RECEIVE_PROGRAMS } from '../actions/programActions';

export default function programsReducer(state = programs || [], action) {
  switch (action.type) {
    case RECEIVE_PROGRAMS:
      return action.programs;
    default:
      return state;
  }
}
