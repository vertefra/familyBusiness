class Card {
    constructor(title, description) {
        this.title = title
        this.description = description
    }

    getCopies(){
        if(this.copies){
            return this.copies
        } 
        throw Error("Card not instantiated correctly")
    }
}

export class FamilyCard extends Card {
    constructor(title, description, gangsterName, gangsterFamily) {
        super(title, description)
        this.gangsterName = gangsterName
        this.gangsterFamily = gangsterFamily
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
