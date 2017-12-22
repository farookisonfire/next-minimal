import 'whatwg-fetch';
import getBaseUrl from '../lib/getBaseUrl';

export const REQUEST_SECTIONS = 'REQUEST_SECTIONS';
export const RECEIVE_SECTIONS = 'RECEIVE_SECTIONS';

const requestSections = () => {
  return { type: REQUEST_SECTIONS };
};

const receiveSections = (sections) => {
  return { type: RECEIVE_SECTIONS, sections };
};

export const fetchSections = () => {
  return (dispatch) => {
    dispatch(requestSections());
    return fetch(`${getBaseUrl()}/clippers/sections`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Unable to retrieve clipper ticket sections');
      })
      .then(sections => dispatch(receiveSections(sections)))
      .catch((err) => {
        console.log('Error retrieving sections.', err);
      });
  };
};
