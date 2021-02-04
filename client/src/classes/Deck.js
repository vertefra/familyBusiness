import {
    Ambush,
    Contract,
    DoubleContract,
    DoubleCross,
    Hit,
    MobWar,
    PriorityContract,
    StValentineMassacre,
    TurnCoat,
} from './AttackCards'
import { FamilyInfluence, Finger, MobPower, SafeHouse } from './CounterCards'
import {
    FederalCrackdown,
    Intrigue,
    PayOff,
    TakeItOntheLam,
    PoliceProtection,
    Truce,
    Substitution,
} from './RescueCards'

export class Deck {
    constructor() {
        this.contracts = 18
        this.priorityContracts = 3
        this.doubleContracts = 3
        this.hits = 1
        this.stValentineMassacre = 1
        this.doubleCross = 1
        this.mobWar = 1
        this.ambush = 1
        this.turnCoat = 1
        this.takeItOnTheLams = 4
        this.policeProtections = 4
        this.substitutions = 2
        this.intrigues = 2
        this.truce = 1
        this.payOff = 1
        this.federalCrackdown = 1
        this.mobPower = 3
        this.familyInfluence = 6
        this.finger = 2
        this.safeHouse = 1
        this.deck = []
    }

    initDeck() {
        for (let i = 1; i <= this.contracts; i++) {
            const card = new Contract()
            this.deck.push(card)
        }
        for (let i = 1; i <= this.priorityContracts; i++) {
            const card = new PriorityContract()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.doubleContracts; i++) {
            const card = new DoubleContract()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.hits; i++) {
            const card = new Hit()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.stValentineMassacre; i++) {
            const card = new StValentineMassacre()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.doubleCross; i++) {
            const card = new DoubleCross()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.mobWar; i++) {
            const card = new MobWar()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.ambush; i++) {
            const card = new Ambush()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.turnCoat; i++) {
            const card = new TurnCoat()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.takeItOnTheLams; i++) {
            const card = new TakeItOntheLam()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.policeProtections; i++) {
            const card = new PoliceProtection()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.substitutions; i++) {
            const card = new Substitution()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.intrigues; i++) {
            const card = new Intrigue()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.truce; i++) {
            const card = new Truce()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.payOff; i++) {
            const card = new PayOff()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.federalCrackdown; i++) {
            const card = new FederalCrackdown()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.mobPower; i++) {
            const card = new MobPower()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.familyInfluence; i++) {
            const card = new FamilyInfluence()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.finger; i++) {
            const card = new Finger()
            this.deck.push(card)
        }

        for (let i = 1; i <= this.safeHouse; i++) {
            const card = new SafeHouse()
            this.deck.push(card)
        }
    }
}
