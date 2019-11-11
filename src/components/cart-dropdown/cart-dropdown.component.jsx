import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ currentUser, hidden, toggleCartHidden, cartItems }) => {
    return (
        !hidden ?
            <div className='cart-dropdown'>
                <div className='header'>
                    <span>MY CART</span>
                    <div className='close-btn' onClick={toggleCartHidden} > &times; </div>

                </div>

                <div className='cart-items'>
                    {   
                        cartItems.length
                        ?cartItems.map(item => <CartItem key={item.id} item={item} />)
                        :<span>Cart is empty :(</span>
                    }
                </div>
                <CustomButton>
                    {
                        currentUser ? 'CHECKOUT' : 'SIGN IN TO CHECKOUT'
                    }
                </CustomButton>
            </div>
            : null
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
    cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDropdown);
