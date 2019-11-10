import React from 'react';
import './cart-icon.styles.scss';

import ShoppingIcon from '../../assets/cart.png';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartIcon = ({ toggleCartHidden, cartItems }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <img alt='cart' src={ShoppingIcon} className='shopping-icon' />
            <span className='item-count'>{cartItems.length}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
