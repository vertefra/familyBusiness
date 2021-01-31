import contractImg from '../assets/cardsImages/contract.jpg'
import priorityContractImg from '../assets/cardsImages/priorityContract.jpg'
import hitImg from '../assets/cardsImages/hit.jpg'
import stValImg from '../assets/cardsImages/stValentineMassacre.jpg'

import {
    contractDescription,
    priorityContractDescription,
    stValentinedescription,
    doubleContractDescription,
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
