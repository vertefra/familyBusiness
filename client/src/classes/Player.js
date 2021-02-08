export class Player {
    constructor(FamilyClass) {
        this.mobsterCards = []
        this.hand = []
        this.FamilyClass = FamilyClass
        this.userID = ''
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
