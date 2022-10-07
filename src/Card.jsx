import React from 'react'
import './Card.css';

const Card = ({exchange}) => {
  return (
    <div className="card">
        <h2>{exchange.name}</h2>
        <p>Adjusted volume 24h share : {exchange.adjusted_volume_24h_share}</p>
    </div>
  )
}

export default Card