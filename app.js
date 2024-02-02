import Deck from "./Deck.js";
const options = {
    values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
    suits: ["Hearts", "Diamonds", "Spades", "Clubs"]
}

const myDeck = new Deck(options);
myDeck.createFullDeck().shuffle().displayCards();