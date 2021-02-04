export class Player {
    constructor(FamilyClass, playerID) {
        this.mobsterCards = []
        this.hand = []
        this.FamilyClass = FamilyClass
        this.playerID = playerID
        this.initFamily()
    }

    initFamily() {
        const family = new this.FamilyClass()
        for (let mobsterName of family.familyNames) {
            const mobster = new this.FamilyClass(mobsterName)
            this.mobsterCards.push(mobster)
        }
    }
}
