import { clippersTickets } from './initialState';

const { sections = [] } = clippersTickets;

export default (state = sections, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
