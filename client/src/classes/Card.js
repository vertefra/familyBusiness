import { v4 as uuidv4 } from 'uuid'

class Card {
    constructor(title, description) {
        this.cardID = uuidv4()
        this.title = title
        this.description = description
    }

    getCopies() {
        if (this.copies) {
            return this.copies
        }
        throw Error('Card not instantiated correctly')
    }
}

export class FamilyCard extends Card {
    constructor(
        gangsterFamily,
        color,
        gangsterName,
        title = 'Mobster Card',
        description = 'Pillars of your family'
    ) {
        super(title, description)
        this.color = color
        this.gangsterFamily = gangsterFamily
        this.gangsterName = gangsterName
    }
}

export class AttackCard extends Card {
    constructor(title, description) {
        super(title, description)
        this.type = 'attack'
    }
}

export class CounterCard extends Card {
    constructor(title, description) {
        super(title, description)
        this.type = 'counter'
    }
}

export class RescueCard extends Card {
    constructor(title, description) {
        super(title, description)
        this.type = 'rescue'
    }
}
