import {
  PROGRAM_STATUS,
  GRANT_ACCEPTED,
} from './constants';

const {
  OPEN,
  CLOSED_WAITLIST_FULL,
  FULL_WAITLIST_OPEN,
  FULL_WAITLIST_CLOSED,
} = PROGRAM_STATUS;

export const determineProgramStatus = (program, grants = {}) => {
  const {
    enrolled = 0,
    confirmed = 0,
    capacity = 10,
    manualClose = false,
    waitlist = [],
    id = '',
  } = program;

  const {
    enrolledIn = '',
    grant = '',
  } = grants;

  if (grant === GRANT_ACCEPTED && id === enrolledIn) return OPEN;
  if (manualClose) return CLOSED_WAITLIST_FULL;
  if ((waitlist.length < 10) && (enrolled + confirmed) >= capacity) return FULL_WAITLIST_OPEN;
  if ((waitlist.length >= 10) && (enrolled + confirmed) >= capacity) return FULL_WAITLIST_CLOSED;
  return OPEN;
};
