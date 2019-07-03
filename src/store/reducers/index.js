// combine redux 
import { combineReducers } from 'redux'

import searchVideoReducer from './searchVideoReducer'

const rootReducer = combineReducers({
  searchVideoReducer
})

export default rootReducer