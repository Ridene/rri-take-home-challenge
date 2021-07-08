import { combineReducers } from 'redux'

import app from "../app/reducers"
import card from "../cards/reducers"

const rootReducer = combineReducers({
  app,
  card
})

export default rootReducer
