import React from 'react';
import './Cart.css'
const Cart = (props) => {
    
   const { cart }= props;
   console.log(cart)
   let totalQuantity=0;
   let total = 0;
   for(const product of cart){
      if (!product.quantity){
        product.quantity = 1;
      }
       total= (total + product.price)*product.totalQuantity;
       totalQuantity =totalQuantity+product.quantity;
   }

    return (
        <div>
           <h3>Summary</h3>
          <p>Iteam:{totalQuantity}</p> 
          <p>Total : {total}</p>
        </div>
    );
};

export default Cart;