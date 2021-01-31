import { Deck } from './Deck'

export class Game {
    constructor() {
        this.players = []
    }

    createDeck() {
        const deck = new Deck()
        deck.initDeck()
        this.gameDeck = deck.deck
    }

    addPlayer(player) {
        this.players.push(player)
    }
}
