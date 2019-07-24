import { createReducer } from 'redux-create-reducer'
import update from 'immutability-helper'

import * as CARD from './constants'

const initialState = {
  loading: false,
  results: []
}

const cardReducer = {
  [CARD.REQUEST_CARDS]: state => update(state, {
    loading: {$set: true}
  }),
  [CARD.REQUEST_CARDS_SUCCESS]: (state, {payload: { cards }}) => update(state, {
    results: {$set: cards},
    loading: {$set: false}
  }),
  [CARD.REQUEST_CARDS_FAIL]: state => update(state, {
    loading: {$set: false}
  }),
}

export default createReducer(initialState, cardReducer);
