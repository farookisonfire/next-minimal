import {createStore} from 'redux'
import rootReducer from '../reducers'

const initStore = (exampleInitialState) => {
  return createStore(rootReducer)
}

export default initStore