import React, { useEffect, useState } from "react";
import { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToStoreCart, getStoreCart } from "../../utilities/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  // console.log(bottles)
  const [cart, setCart] = useState([]);
useEffect(()=>{
    const storedCartIds=getStoreCart();
    // console.log(storedCartIds,bottles)
    const storedCart=[];
    for(const id of storedCartIds){
        // console.log(id)
        const cartBottle=bottles.find(bottle=>bottle.id===id)
        if(cartBottle){

            storedCart.push(cartBottle);
        }
    }
    setCart(storedCart)

},[bottles])


  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToStoreCart(bottle.id);
  };

  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      <h4>Cart : {cart.length}</h4>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            handleAddToCart={handleAddToCart}
            key={bottle.id}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
