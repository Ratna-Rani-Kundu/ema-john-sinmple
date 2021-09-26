import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
    //console.log('clicked')
    const{img,name,stock,price,seller,star}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div>
              <h3 className='product-name'>{name}</h3> 
              <p> <small>by {seller}</small></p>
               <p>Price {price}</p>
               <p>Stock {stock}</p>
               <Rating 
               initialRating={star}
               
               emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
               ></Rating>
               <br />
               <button 
               onClick={()=>props.handleAddToCart(props.product)}
                className='btn-regular'>{cartIcon}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;