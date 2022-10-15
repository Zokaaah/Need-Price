import { useEffect, useState } from "react";
import styles from './../components/styles/cards.modules.css'
import api from "../../http/api";
function Home() {
    const [prices, setPrices] = useState([])
    async function GetPrices(){
        const {data} = await api.get("/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL")
        const arrayData = Object.keys(data).map((key) => data[key]);

        setPrices (arrayData);

        console.log(arrayData)

    }
    useEffect(() => {
        GetPrices()
    },[]) 
  return (
   <div>
    <header>
    </header>
    <div  className="container_cards">
    {prices.map((item) =>
    (<div className="cards">
         <h3 className="name">{item.name}</h3>
         <p className="Bid">{"Bid Price R$ "}{item.bid}</p>

         <p className="Ask">{"Ask Price R$ "}{item.ask}</p>

         <p>{item.codein}</p>
     </div>
     
             )
    )}              </div>

<div className="container_table">
    
<table className="table">

  <tr>
    <th className="table_title">Cod</th>
    <th className="table_title">High Price</th>
    <th className="table_title">Low Price</th>
  </tr>

    {prices.map((item2) =>
    (


  <tr>
    <td>{item2.code}</td>
    <td className="High">{"R$ "}{item2.high}</td>
    <td className="Low">{"R$ "}{item2.low}</td>
  </tr>
  
        


     

     
             )
    )}
        </table>
    </div>

    

   </div>
  );
}

export default Home;
