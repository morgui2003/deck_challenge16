import Card from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";
class Deck {
    #cards = [];
    constructor(options) {
        this.values = options.values;
        this.suits = options.suits;
    }

    createFullDeck() {
        this.values.forEach((value) => {
            this.suits.forEach((suit) => {
                const card = new Card(value, suit);
                this.#cards.push(card);
            });
        });
        return this;

    }

    displayCards() {
        this.#cards.forEach((card) => card.display());
    }

    shuffle() {
        this.#cards = shuffle(this.#cards);
        return this;
    }
}

export default Deck;