import contractImg from '../assets/cardsImages/contract.jpg'
import priorityContractImg from '../assets/cardsImages/priorityContract.jpg'
import hitImg from '../assets/cardsImages/hit.jpg'
import stValImg from '../assets/cardsImages/stValentineMassacre.jpg'
import doublecrossImg from '../assets/cardsImages/doubleCross.jpg'
import mobWarImg from '../assets/cardsImages/mobWar.jpg'
import ambushImg from '../assets/cardsImages/ambush.jpg'
import vendettaImg from '../assets/cardsImages/vendetta.jpg'
import turnCoatImg from '../assets/cardsImages/turnCoat.jpg'

import {
    contractDescription,
    priorityContractDescription,
    vendettaDescription,
    turnCoatDescription,
    stValentinedescription,
    doubleContractDescription,
    doubleCrossdescription,
    ambushDescription,
    mobWarDescription,
    hitDescription,
} from '../assets/cardDescriptions/attackCards'

import { AttackCard } from './Card'

export class Contract extends AttackCard {
    constructor(title = 'Contract', description = contractDescription) {
        super(title, description)
        this.image = contractImg
        this.copies = 18
    }
}

export class PriorityContract extends AttackCard {
    constructor(
        title = 'Priority Contract',
        description = priorityContractDescription
    ) {
        super(title, description)
        this.image = priorityContractImg
        this.copies = 3
    }
}

export class DoubleContract extends AttackCard {
    constructor(
        title = 'Double Contract',
        description = doubleContractDescription
    ) {
        super(title, description)
        this.image = priorityContractImg
        this.copies = 3
    }
}

export class Hit extends AttackCard {
    constructor(title = 'Hit', description = hitDescription) {
        super(title, description)
        this.image = hitImg
        this.copies = 1
    }
}

export class StValentineMassacre extends AttackCard {
    constructor(
        title = "San Valentine's Massacre",
        description = stValentinedescription
    ) {
        super(title, description)
        this.image = stValImg
        this.copies = 1
    }
}

export class DoubleCross extends AttackCard {
    constructor(title = 'Double Cross', description = doubleCrossdescription) {
        super(title, description)
        this.image = doublecrossImg
        this.copies = 1
    }
}

export class MobWar extends AttackCard {
    constructor(title = 'Mob War', description = mobWarDescription) {
        super(title, description)
        this.image = mobWarImg
        this.copies = 1
    }
}

export class Ambush extends AttackCard {
    constructor(title = 'Ambush', description = ambushDescription) {
        super(title, description)
        this.image = ambushImg
        this.copies = 1
    }
}

export class Vendetta extends AttackCard {
    constructor(title = 'Vendetta', description = vendettaDescription) {
        super(title, description)
        this.image = vendettaImg
        this.copies = 1
    }
}

export class TurnCoat extends AttackCard {
    constructor(title = 'TurnCoat', description = turnCoatDescription) {
        super(title, description)
        this.image = turnCoatImg
        this.copies = 1
    }
}
