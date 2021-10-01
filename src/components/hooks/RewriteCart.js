import { useEffect, useState } from "react";
import {getStoredCart} from '../../utilities/fakedb';
const RewriteCart=(products)=>{
const [cart,setCart]=useState([])
useEffect( () => {
    if(products.length){

        const savedCart= getStoredCart();
        const storedCart= [];

        for (const key in savedCart){
          const addedProduct =products.find(product =>product.key ===key);
            
            
            
            
            if(addedProduct){
              const quantity =savedCart[key];
              addedProduct.quantity=quantity;
              console.log(addedProduct)
               storedCart.push(addedProduct)
            }

        }
       
          setCart(storedCart);
       }
},[products]);
return [cart,setCart]

}

export default RewriteCart;      
      