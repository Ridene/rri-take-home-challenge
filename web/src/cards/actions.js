import { createAction} from 'redux-actions'

import * as api from '../api/cardCalls'
import * as CARD from './constants'
import mapping from './mapper'

export const requestCards = createAction(CARD.REQUEST_CARDS)
export const requestCardsSuccess = createAction(CARD.REQUEST_CARDS_SUCCESS)
export const requestCardsFail = createAction(CARD.REQUEST_CARDS_FAIL)

export const getCards = () => async dispatch => {
  dispatch(requestCards())
  const res = await api.getCards()

  if (!res) dispatch(requestCardsFail())

  const data= mapping.cardList.fromApi(res)

  dispatch(requestCardsSuccess(data))
}
