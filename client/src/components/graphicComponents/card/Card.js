import React from 'react'
import './Card.css'

const Card = ({ imgUrl }) => {
    return (
        <div className="card">
            <img src={imgUrl} />
        </div>
    )
}

export default Card
