import { useParams } from "react-router-dom";
import { useState } from 'react';

function Exchange() {

  // const [data, setData] = useState([]);
  let {id} = useParams();

  // async function getData(){
  //   let data = await fetch('http://localhost:3000/exchanges.json');
  //   let reponse = await data.json();
  //   setData(reponse);
  // }

  // getData();
  // console.log(data);

  return (
    <div className="Exchange">
      <main>
        <h1></h1>
      </main>
    </div>
  );
}

export default Exchange;
