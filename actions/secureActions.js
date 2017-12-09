export const SECURE_SELECT_ENROLL = 'SECURE_SELECT_ENROLL';

export const secureSelectEnroll = (programSelected, selectedProgramId) => {
  return { type: SECURE_SELECT_ENROLL, programSelected, selectedProgramId };
};
