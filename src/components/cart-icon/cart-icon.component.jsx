import React from 'react';
import './cart-icon.styles.scss';

import  ShoppingIcon  from '../../assets/cart.png';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <img alt='cart' src={ShoppingIcon} className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(
    null,
    mapDispatchToProps
)(CartIcon);
