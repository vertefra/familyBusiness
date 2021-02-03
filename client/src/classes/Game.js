import { Deck } from './Deck'
import {
    BankRobbers,
    CaponeMob,
    MoranGang,
    MurderInc,
    NewYorkMob,
    PurpleGang,
} from './FamilyCards'
import { Player } from './Player'

const familiesClasses = [
    NewYorkMob,
    MoranGang,
    CaponeMob,
    MurderInc,
    PurpleGang,
    BankRobbers,
]

export class Game {
    constructor({ numberOfPlayers = 3 }) {
        this.players = []
        this.list = []
        this.cemetery = []
        this.numberOfPlayers = numberOfPlayers
        this.initFamilies()
        this.createDeck()
    }

    initFamilies() {
        for (let i = 0; i < this.numberOfPlayers; i++) {
            // TODO: people being able to decide their family
            const familyClass = familiesClasses[i]
            const player = new Player(familyClass)
            this.players.push(player)
        }
    }

    assignPlayer(playerID) {
        for (let player of this.players) {
            if (!player.playerID) {
                player.playerID = playerID
                return true
            }
        }

        return false
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
