import { v4 as uuid4 } from 'uuid'

export class Player {
    constructor(playerID, familyObj) {
        this.playerID = playerID
        this.family = familyObj
        this.hand = []
        this.mobsters = []
        this.playerTurn = false
        this.playerDraw = false
        this.playerPlay = false
        this.playerEnd = false
    }

    initFamily() {
        for (let mobster of this.family.mobsters) {
            const mobsterObj = {
                name: mobster,
                color: this.family.color,
                family: this.family.familyName,
                cardID: uuid4(),
            }

            this.mobsters.push(mobsterObj)
        }
    }
}
