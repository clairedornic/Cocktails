export async function getCocktailById(idCocktail){
    let cocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idCocktail);
    cocktail = await cocktail.json();
    
    return(cocktail);
}