import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
    console.log('clicked')
    const{img,name,stock,price,seller}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div>
              <h3 className='product-name'>{name}</h3> 
              <p> <small>by {seller}</small></p>
               <p>Price {price}</p>
               <p>Stock {stock}</p>
               <button 
               onClick={()=>props.handleAddToCart(props.product)}
                className='btn-regular'>{cartIcon}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;