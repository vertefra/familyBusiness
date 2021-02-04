import React from 'react'
import { Card } from '../../graphicComponents/card/Card'

const Family = ({ mobsters }) => {
    return (
        <div className="family">
            {mobsters.map((card, idx) => {
                return <Card key={idx} card={card} />
            })}
        </div>
    )
}

export default Family
