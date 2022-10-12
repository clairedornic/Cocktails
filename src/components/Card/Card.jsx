import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({cocktail}) => {
  return (
    <Link to={`cocktail/${cocktail.idDrink}`}>
      <div className="card">
        <img src={cocktail.strDrinkThumb} alt={`Image du ${cocktail.strDrink}`} />
        <h2>{cocktail.strDrink}</h2>
      </div>
    </Link>
  )
}

export default Card