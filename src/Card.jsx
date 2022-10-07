import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({exchange}) => {
  return (
    <Link to={`exchange/${exchange.id}`}>
      <div className="card">
        <h2>{exchange.name}</h2>
        <p>Adjusted volume 24h share : {exchange.adjusted_volume_24h_share}</p>
      </div>
    </Link>
  )
}

export default Card