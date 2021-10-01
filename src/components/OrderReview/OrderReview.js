import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RewriteCart from '../hooks/RewriteCart';

import useProducts from '../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = RewriteCart(products);
    const handleRemove =key =>{
       const newCart =cart.filter(product=>product.key!==key);
       setCart(newCart);
       removeFromDb(key);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;