import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// CUSTOM REDUCERS
import reducers from './reducers/index'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const middlewares = [ thunk, logger]

const store = createStore(reducers)

export default store