import './styles/Home.css';
import Card from './components/Card/Card';
import { useState, useEffect } from 'react';
import { getCocktails } from './api/getCocktails';

function App() {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    getCocktails().then(allCocktails =>{
      setCocktail(allCocktails.drinks);
    })
  }, [])

  return (
    <div className="home">
      <main>
        <section className="hero">
          <div className="img-container">
            <img src='/assets/images/cocktail.png' alt="Cocktail orangé servi avec des fraises" />
          </div>
          <div className="content-container">
            <h1>Gin’s Coquetel</h1>
            <p>There are those cocktails that will never go out of style. Their irresistible taste and simplicity have stood the test of time. To become a real bartender, you must first know your classics. Here are some classics created with Gin.</p>
            <a href="#bangers">Discover</a>
          </div>
        </section>
        <section id="bangers" className='bangers'>
          <h2>Our bangers</h2>
          <div className="container-cocktails">
            <div className="cards">
              {cocktail.map((cocktail) => {
                return (
                  <Card key={cocktail.idDrink} cocktail={cocktail}></Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
