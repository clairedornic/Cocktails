import { useEffect, useState } from 'react';
import Ingredient from '../Ingredient/Ingredient';

function ListIngredients({cocktail}) {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        setIngredients(currentIngredients => [...currentIngredients, cocktail.strIngredient1, cocktail.strIngredient2, cocktail.strIngredient3, cocktail.strIngredient4, cocktail.strIngredient5, cocktail.strIngredient6, cocktail.strIngredient7, cocktail.strIngredient8, cocktail.strIngredient9, cocktail.strIngredient10, cocktail.strIngredient11, cocktail.strIngredient12, cocktail.strIngredient13, cocktail.strIngredient14, cocktail.strIngredient15]);
    }, [cocktail])

    return (
        <ul>
            {ingredients.map((ingredient) => {
    
                if( ingredient ) {
                    return (
                        <Ingredient key={ingredient.idDrink} ingredient={ingredient}></Ingredient>
                    )
                } else {
                    return null;
                }
            })}
      </ul>
    )
}

export default ListIngredients;