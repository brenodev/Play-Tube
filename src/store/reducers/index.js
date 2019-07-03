// combine redux 
import { combineReducers } from 'redux'

// REDUCERS
import searchVideoReducer from './searchVideoReducer'
import playVideoReducer from './playVideoReducer'

const rootReducer = combineReducers({
  searchVideoReducer,
  playVideoReducer
})

export default rootReducer