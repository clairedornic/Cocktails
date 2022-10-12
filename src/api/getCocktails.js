export async function getCocktails(){
    let allCocktails = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin');
    allCocktails = await allCocktails.json();
    
    return(allCocktails);
}