import React, { useEffect, useState } from "react";
import { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToStoreCart, getStoreCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  // console.log(bottles)
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds,bottles)
    const storedCart = [];
    for (const id of storedCartIds) {
      // console.log(id)
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToStoreCart(bottle.id);
  };

  const handleRemoveFromCart=(id)=>{
    console.log('remove item from cart',id);

    const remainingCart=cart.filter(bottle=>bottle.id!==id);
    setCart(remainingCart);

  }

  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      <h4>Cart : {cart.length}</h4>
      <Cart cart={cart}
      handleRemoveFromCart={handleRemoveFromCart}
      ></Cart>
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
