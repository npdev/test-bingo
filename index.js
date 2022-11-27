const data = require('./const')
const { checkGivenCards } = require('./helper')

const result = checkGivenCards(data.GIVEN_CARDS)
// eslint-disable-next-line no-console
console.log(result)
