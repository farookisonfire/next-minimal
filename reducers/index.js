import {combineReducers} from 'redux'
import showCanvas from './landingReducer'
import programs from './programsReducer'

const rootReducer = combineReducers({
  showCanvas,
  programs
})

export default rootReducer