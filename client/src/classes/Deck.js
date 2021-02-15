import {
    contractDescription,
    doubleContractDescription,
    priorityContractDescription,
    hitDescription,
    stValentinedescription,
    doubleCrossdescription,
    mobWarDescription,
    ambushDescription,
    turnCoatDescription,
} from '../assets/cardDescriptions/attackCards'

import {
    mobPowerdescription,
    fingerDescription,
    familyInfluenceDescription,
    safeHouseDescription,
} from '../assets/cardDescriptions/counterCards'

import {
    takeItOnTheLamDescription,
    policeProtectionDescription,
    substitutionDescription,
    intrigueDescription,
    truceDescription,
    payOffDescription,
    FederalCrackdownDescription,
} from '../assets/cardDescriptions/rescueCards'

const cardList = {
    contracts: 18,
    priorityContracts: 3,
    doubleContracts: 3,
    hits: 1,
    stValentineMassacre: 1,
    doubleCross: 1,
    mobWar: 1,
    ambush: 1,
    turnCoat: 1,
    takeItOnTheLams: 4,
    policeProtections: 4,
    substitutions: 2,
    intrigues: 2,
    truce: 1,
    payOff: 1,
    federalCrackdown: 1,
    mobPower: 3,
    familyInfluence: 6,
    finger: 2,
    safeHouse: 1,
}

export class Card {
    constructor({ name, description, type, effect }) {
        this.name = name
        this.description = description
        this.type = type
        this.effect = effect
    }
}

export class Deck {
    constructor() {
        this.deck = []
    }

    generateCards({ name, description, type, effect, quantity }) {
        for (let i = 1; i <= quantity; i++) {
            const card = new Card({ name, description, type, effect })
            this.deck.push(card)
        }
    }

    static shuffle(deck = []) {
        for (let index in deck) {
            const newIndex = Math.floor(Math.random() * deck.length)
            const holder = deck[newIndex]
            deck[newIndex] = deck[index]
            deck[index] = holder
        }
    }

    getDescriptionAndType(cardType) {
        switch (cardType) {
            case 'contracts':
                return {
                    description: contractDescription,
                    type: 'attack',
                }

            case 'priorityContracts':
                return {
                    description: priorityContractDescription,
                    type: 'attack',
                }

            case 'doubleContracts':
                return {
                    description: doubleContractDescription,
                    type: 'attack',
                }

            case 'hits':
                return {
                    description: hitDescription,
                    type: 'attack',
                }

            case 'stValentineMassacre':
                return {
                    description: stValentinedescription,
                    type: 'attack',
                }

            case 'doubleCross':
                return {
                    description: doubleCrossdescription,
                    type: 'attack',
                }

            case 'mobWar':
                return {
                    description: mobWarDescription,
                    type: 'attack',
                }

            case 'ambush':
                return {
                    description: ambushDescription,
                    type: 'attack',
                }

            case 'turnCoat':
                return {
                    description: turnCoatDescription,
                    type: 'attack',
                }

            case 'takeItOnTheLams':
                return {
                    description: takeItOnTheLamDescription,
                    type: 'rescue',
                }

            case 'policeProtections':
                return {
                    description: policeProtectionDescription,
                    type: 'rescue',
                }

            case 'substitutions':
                return {
                    description: substitutionDescription,
                    type: 'rescue',
                }

            case 'intrigues':
                return {
                    description: intrigueDescription,
                    type: 'rescue',
                }

            case 'truce':
                return {
                    description: truceDescription,
                    type: 'rescue',
                }

            case 'payOff':
                return {
                    description: payOffDescription,
                    type: 'rescue',
                }

            case 'federalCrackdown':
                return {
                    description: FederalCrackdownDescription,
                    type: 'rescue',
                }

            case 'mobPower':
                return {
                    description: mobPowerdescription,
                    type: 'counter',
                }

            case 'familyInfluence':
                return {
                    description: familyInfluenceDescription,
                    type: 'counter',
                }

            case 'finger':
                return {
                    description: fingerDescription,
                    type: 'counter',
                }

            case 'safeHouse':
                return {
                    description: safeHouseDescription,
                    type: 'counter',
                }

            default:
                return undefined
        }
    }

    formatCardName(objectName) {
        let formattedString = ''
        let index = 0
        for (let l of objectName) {
            if (index === 0) {
                l = l.toUpperCase()
            }

            if (
                objectName[index + 1] &&
                objectName[index] === objectName[index].toUpperCase()
            ) {
                // Test if the next letter is uppercase. if it is add a space
                formattedString += ' '
            }

            if (index === objectName.length - 1 && objectName[index] === 's') {
                return formattedString
            }

            formattedString += l
            index++
        }
        return formattedString
    }

    createDeck() {
        for (let cardType in cardList) {
            const name = this.formatCardName(cardType)
            const { description, type } = this.getDescriptionAndType(cardType)
            const quantity = cardList[cardType]
            this.generateCards({ name, description, type, quantity })
        }
    }
}
