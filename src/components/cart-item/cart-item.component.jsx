import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { cover_image, song, price } }) => {
    return (
        <div className='cart-item'>
            <img alt='item' src={cover_image} />
            <div className='item-details'>
                <span className='name'>{song}</span>
                <span className="price">₹ {price}</span>
            </div>
        </div>
    )
}

export default CartItem
