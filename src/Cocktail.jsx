import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getCocktailById } from './api/getCocktailByID';
import { useNavigate } from "react-router-dom";
import ListIngredients from './components/List-ingredients/ListIngredients';
import './styles/Cocktail.css';

function Cocktail() {

  let {cocktailId} = useParams();
  const [cocktail, setCocktail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCocktailById(cocktailId).then(cocktail =>{
      setCocktail(cocktail.drinks[0]);
    })
  }, [])

  return (
    <div className="single-cocktail">
      <main>
        <div className="go-back">
          <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
          >
            <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 15L15 2M3 15L15 26M3 15H19H33" stroke="black" strokeWidth="3"/></svg>
          </button>
        </div>
        <div className="main-infos">
          <div className="content-container">
            <h1>{cocktail.strDrink}</h1>
          </div>
          <div className="img-container">
            <img src={cocktail.strDrinkThumb} alt={`Image du ${cocktail.strDrink}`} />
          </div>
        </div>
       <div className="other-infos">
       <div className="recipe">
          <h2>Recipe</h2>
          <p>{cocktail.strInstructions}</p>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ListIngredients cocktail={cocktail}></ListIngredients>
        </div>
       </div>
      </main>
    </div>
  );
}

export default Cocktail;
