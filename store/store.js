import { createStore } from 'redux';
import rootReducer from '../reducers';

const initStore = () => {
  return createStore(rootReducer);
};

export default initStore;
