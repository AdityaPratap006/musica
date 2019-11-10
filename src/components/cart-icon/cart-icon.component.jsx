import React from 'react';

import './cart-icon.styles.scss';

import  ShoppingIcon  from '../../assets/cart.png';

const CartIcon = () => {
    return (
        <div className='cart-icon'>
            <img alt='cart' src={ShoppingIcon} className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;
