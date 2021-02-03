import React from 'react'
import { Card } from '../../graphicComponents/card/Card'

const Family = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="family">
            {cards.map((card, idx) => {
                return <Card key={idx} />
            })}
        </div>
    )
}

export default Family
