import logo from './logo.png';
import './App.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();

  }, [])
  
  async function getData(){
    let data = await fetch('http://localhost:3000/exchanges.json');
    let reponse = await data.json();
    setData(reponse);
  }

  return (
    <div className="App">
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Exchanges acceptant le Dogecoin</h1>
        <div className="App-cards">
          {data.map((exchange) => {
            return (
              <Card key={exchange.id} exchange={exchange}></Card>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
