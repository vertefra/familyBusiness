import React from 'react'
import { SafeHouse } from '../../../classes/CounterCards'
import './cemetery.css'

import { Card } from '../../graphicComponents/card/Card'

const Cemetery = ({ cemetery }) => {
    console.log(cemetery)
    return (
        // nel cimitero .map organizza il render di tutte le carte nell
        // nell'array cimiter. una volta aggiunta una carta la stampa su schermo

        <div className="cemetery">
            {cemetery.map((card) => {
                let cardClass
                if (card.title === 'Safe House') {
                    cardClass = new SafeHouse()
                }
                return <Card card={cardClass} key={cardClass.uuid} />
            })}
        </div>
    )
}

export default Cemetery
