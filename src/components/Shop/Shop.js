import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [displayProducts,setDisplayProducts]=useState([])
    useEffect(()=>{
     
        fetch('./products.JSON')
        
        .then(res=>res.json())
        .then(data=>{
         
          setProducts(data);
          setDisplayProducts(data);
        
          })

    },[])
    //show in slocal sorage
    useEffect(()=>{
      
      
       if(products.length){
        const savedCart= getStoredCart();
        const storedCart= [];
        for (const key in savedCart){
          const addedProduct =products.find(product =>product.key ===key);
            console.log(key,addedProduct)
            if(addedProduct){
              const quantity =savedCart[key];
              addedProduct.quantity=quantity;
              console.log(addedProduct)
               storedCart.push(addedProduct)
            }
        }
       
          setCart(storedCart);
       }
    },[products])
   const handleAddToCart = product =>{
     console.log(product) 
       const newCart=[...cart,product];
      setCart(newCart);
      //save to local storage
      addToDb(product.key)
   }
   //seacrh box
   const handleSeach= event=>{
   const searchText = event.target.value;
   const matchedProducts =products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
   
   setDisplayProducts(matchedProducts);
   console.log(matchedProducts.length);
}
    return (
      <div>
           <div className='search-container'>
              <input 
              type="text"
              onChange={handleSeach} 
              placeholder='search your product'/>
            </div>
           <div className='shop-container'>
            <div className='product-container'>
              <h3>Products{products.length}</h3>
              {
                  displayProducts.map(product=><Product
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    >

                    </Product>)
              }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
      </div>
        
    );
};

export default Shop;