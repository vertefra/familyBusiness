import takeItOnTheLamImg from '../assets/cardsImages/takeItOnTheLam.jpg'
import policeProtectionImg from '../assets/cardsImages/policeProtection.jpg'
import substitutionImg from '../assets/cardsImages/substitution.jpg'
import intrigueImg from '../assets/cardsImages/intrigue.jpg'
import truceImg from '../assets/cardsImages/truce.jpg'
import payOffImg from '../assets/cardsImages/payoff.jpg'
import FederalCrackdownImg from '../assets/cardsImages/federalCrackdown.jpg'

import {
    takeItOnTheLamDescription,
    policeProtectionDescription,
    FederalCrackdownDescription,
    substitutionDescription,
    intrigueDescription,
    payOffDescription,
    truceDescription,
} from '../assets/cardDescriptions/rescueCards'

import { RescueCard } from './Card'

export class TakeItOntheLam extends RescueCard {
    constructor(
        title = 'Take it on the Lam',
        description = takeItOnTheLamDescription
    ) {
        super(title, description)
        this.image = takeItOnTheLamImg
        this.copies = 4
    }
}

export class PoliceProtection extends RescueCard {
    constructor(
        title = 'Police Protection',
        description = policeProtectionDescription
    ) {
        super(title, description)
        this.image = policeProtectionImg
        this.copies = 4
    }
}

export class Substitution extends RescueCard {
    constructor(title = 'Substitution', description = substitutionDescription) {
        super(title, description)
        this.image = substitutionImg
        this.copies = 2
    }
}

export class Intrigue extends RescueCard {
    constructor(title = 'Intrigue', description = intrigueDescription) {
        super(title, description)
        this.image = intrigueImg
        this.copies = 2
    }
}

export class Truce extends RescueCard {
    constructor(title = 'Truce', description = truceDescription) {
        super(title, description)
        this.image = truceImg
        this.copies = 1
    }
}

export class PayOff extends RescueCard {
    constructor(title = 'Pay Off', description = payOffDescription) {
        super(title, description)
        this.image = payOffImg
        this.copies = 1
    }
}

export class FederalCrackdown extends RescueCard {
    constructor(
        title = 'Federal Crackdown',
        description = FederalCrackdownDescription
    ) {
        super(title, description)
        this.image = FederalCrackdownImg
        this.copies = 1
    }
}
