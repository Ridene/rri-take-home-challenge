import data from '../../../mocks/results'

export const getCards = () => {

  console.log('[GET]', 'Cards')
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 500)
  })
}
