import contractImg from '../assets/cardsImages/contract.jpg'
import { contractDescription } from '../assets/cardDescriptions/attackCards'
import { AttackCard } from './Card'

export class Contract extends AttackCard {
    constructor(title = 'contract', description = contractDescription) {
        super(title, description)
        this.image = contractImg
    }
}
