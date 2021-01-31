import mobPowerImg from '../assets/cardsImages/mobPower.png'
import fingerImg from '../assets/cardsImages/finger.png'
import familyInfluenceImg from '../assets/cardsImages/familyInfluence.png'
import safeHouseImg from '../assets/cardsImages/safeHouse.png'

import {
    mobPowerdescription,
    familyInfluenceDescription,
    safeHouseDescription,
    fingerDescription,
} from '../assets/cardDescriptions/counterCards'

import { CounterCard } from './Card'
import { Contract, DoubleContract, PriorityContract, Vendetta } from './AttackCards'
import { TakeItOntheLam } from './RescueCards'

export class MobPower extends CounterCard {
    constructor(title = 'Mob Power', description = mobPowerdescription) {
        super(title, description)
        this.counter = [Contract, DoubleContract, PriorityContract]
        this.image = mobPowerImg
        this.copies = 3
    }
}

export class FamilyInfluence extends CounterCard {
    constructor(
        title = 'Family Influence',
        description = familyInfluenceDescription
    ) {
        super(title, description)
        this.counter = [Contract, DoubleContract, PriorityContract]
        this.image = familyInfluenceImg
        this.copies = 6
    }
}

export class Finger extends CounterCard {
    constructor(title = 'Finger', description = fingerDescription) {
        super(title, description)
        this.counter = [TakeItOntheLam]
        this.image = fingerImg
        this.copies = 2
    }
}


export class SafeHouse extends CounterCard {
    constructor(title = 'Safe House', description = safeHouseDescription) {
        super(title, description)
        this.counter = [Vendetta]
        this.image = safeHouseImg
        this.copies = 1
    }
} 