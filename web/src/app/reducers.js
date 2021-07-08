import { createReducer } from 'redux-create-reducer'
import update from 'immutability-helper'

import * as APP from './constants'

const intialState = {
  loading: false,
}

const appReducer = {
  [APP.IS_LOADING]: (state,  {payload: loading}) => update(state, {
    loading: {$set: loading}
  }),
}

export default createReducer(intialState, appReducer);
