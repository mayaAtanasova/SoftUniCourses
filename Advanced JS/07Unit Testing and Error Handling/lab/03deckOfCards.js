function printDeckOfCards(cards) {
    const result = cards.map(createCard);
    if (result.some(x => x.includes('Invalid'))){
        console.log(result.filter(x => x.includes('Invalid')).join(''));
    }else{
        console.log(result.join(' '));
    }
    function createCard(card) {
        const suit = card.slice(-1);
        const face = card.slice(0, -1);
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };
        if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) {
            return `Invalid card: ${card}`;
        }
        return `${face}${validSuits[suit]}`;
    }
}

printDeckOfCards(['AS', '10D', 'KH', '1C']);