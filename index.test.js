const data = require('./const')
const helper = require('./helper')

describe('functions', () => {
    it('should test checkWinnerCard as true', () => {
        const res = helper.checkWinnerCard(
            data.GIVEN_NUMBERS,
            data.GIVEN_CARDS[0]
        )
        expect(res).toStrictEqual(true)
    })
    it('should test checkWinnerCard as false', () => {
        const res = helper.checkWinnerCard(data.GIVEN_NUMBERS, data.LOOSER_CARD)
        expect(res).toStrictEqual(false)
    })
    it('should test checkGivenCards', () => {
        const mockCheckWinnerCard = jest.fn()
        helper.checkWinnerCard = mockCheckWinnerCard
            .mockImplementationOnce(() => false)
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => true)

        const res = helper.checkGivenCards(data.GIVEN_CARDS)

        expect(res).toStrictEqual([{ 1: false }, { 2: true }, { 3: true }])
        expect(mockCheckWinnerCard).toHaveBeenCalledTimes(3)
        expect(mockCheckWinnerCard).toHaveBeenCalledWith(
            data.GIVEN_NUMBERS,
            data.GIVEN_CARDS[0]
        )
        expect(mockCheckWinnerCard).toHaveBeenCalledWith(
            data.GIVEN_NUMBERS,
            data.GIVEN_CARDS[1]
        )
        expect(mockCheckWinnerCard).toHaveBeenCalledWith(
            data.GIVEN_NUMBERS,
            data.GIVEN_CARDS[2]
        )
    })
})
