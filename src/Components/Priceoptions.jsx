
import { useState, useEffect } from "react";
import { Priceoption } from "./Priceoption";

function Priceoptions() {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    const priceFunction = async () => {
      try {
        const res = await fetch("Price.json");
        const data = await res.json();

        setPrice(data);
      } catch (error) {
        console.log(error);
      }
    };

    priceFunction();
  }, []);
  return (
    <div className="ml-5" >
      <h2>Length : {price.length}</h2>
      {

        price.map(prices=><Priceoption prices={prices}></Priceoption>)
      }
    </div>
  );
}

export { Priceoptions };
