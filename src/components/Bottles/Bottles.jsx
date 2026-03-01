import React, { useState } from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {


    const bottles=use(bottlesPromise);
    // console.log(bottles)
   const [cart,setCart]=useState([])
    const handleAddToCart=(bottle)=>{
        console.log(bottle);
    }

    

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
          <div className='bottles-container'>
              {
                bottles.map(bottle=><Bottle
                     bottle={bottle} 
                     handleAddToCart={handleAddToCart}
                     key={bottle.id}></Bottle>)
            }
          </div>
            
        </div>
    );
};

export default Bottles;