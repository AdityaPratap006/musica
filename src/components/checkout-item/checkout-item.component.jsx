import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';

import { removeCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, removeCartItem }) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={item.cover_image} />
                <span className='name'>{item.song} </span>
            </div>
            <span className='price'>{item.price}</span>
            <span className='remove-button' onClick={() => {removeCartItem(item)}}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeCartItem: item => dispatch(removeCartItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
