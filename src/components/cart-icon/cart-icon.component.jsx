import React from 'react';
import './cart-icon.styles.scss';

import ShoppingIcon from '../../assets/cart.png';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount, onClick }) => {
    return (
        <div className='cart-icon' onClick={()=>{
            toggleCartHidden();
    
        }}>
            <img alt='cart' src={ShoppingIcon} className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
