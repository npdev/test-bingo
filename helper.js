const data = require("./const");

exports.checkWinnerCard = (line, card) => {
    return !!data.CHECK_LINE_INDEXES.find(checkIndexArray => {
        const checkCardLine = checkIndexArray.reduce(
            (acc, curr) => acc.concat([card.at(curr-1)]), []);
        let checkedNumbers = 0;
        checkCardLine.forEach(value => {
            if (line.includes(value)) checkedNumbers++;
        });
        if(checkedNumbers === 5) return true;
    });
}

exports.checkGivenCards = (cards) => {
    return cards.map((card, cardIndex) => {
        const isWinnerCard = exports.checkWinnerCard(data.GIVEN_NUMBERS, card);
        return {[cardIndex + 1]: isWinnerCard};
    });
}