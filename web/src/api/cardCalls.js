import data from '../../../mocks/results'

export const getCards = () => {

  // eslint-disable-next-line no-console
  console.log('[GET]', 'Cards')
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 500)
  })
}
