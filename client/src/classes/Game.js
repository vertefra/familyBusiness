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
    constructor({
        numberOfPlayers = 3,
        gameID = '',
        gameName = '',
        userID = '',
    }) {
        this.gameID = gameID
        this.userID = userID
        this.gameName = gameName
        this.players = []
        this.list = []
        this.cemetery = []
        this.numberOfPlayers = numberOfPlayers
        this.initFamilies()
        this.createDeck()
        this.gameState = 'starting' // starting - started - ended
    }

    initFamilies() {
        for (let i = 0; i < this.numberOfPlayers; i++) {
            // TODO: people being able to decide their family
            const familyClass = familiesClasses[i]
            const player = new Player(familyClass)
            console.log('NEW PLAYER')
            console.log(player)
            this.players.push(player)
        }
    }

    assignUserToPlayer(userID) {
        console.log('ASSIGNING => ', userID)
        for (let player of this.players) {
            if (!player.userID) {
                player.userID = userID
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
}
