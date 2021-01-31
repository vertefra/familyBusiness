class Card{
    constructor(title, description){
        this.title = title
        this.description = description
    }
}

class ActionCard extends Card {
    constructor(title, description){
        super(title, description)
        this.type = "action"
    }
}

class RescueCard extends Card {
    constructor(title, description){
        super(title, description)
        this.type = ""
    }
}