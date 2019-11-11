import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>SONG</span>
                </div>
                <div className='header-block'>
                    <span>PRICE</span>
                </div>
                <div className='header-block'>
                    <span>REMOVE</span>
                </div>
            </div>
            <div className='checkout-body'>
            {
                 cartItems.map(cartItem => <CheckoutItem item={cartItem} /> )
            }
            </div>
            
            <div className='total'>  ₹ {total}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectTotalPrice(state)
})




export default connect(
    mapStateToProps,
    null
)(CheckoutPage);
