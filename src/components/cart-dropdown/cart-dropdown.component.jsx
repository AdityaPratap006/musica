import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { withRouter } from 'react-router-dom';

const CartDropdown = ({ currentUser, hidden, toggleCartHidden, cartItems, history, onClick }) => {
    
    const handleClick = ()=>{
        if(currentUser){
            history.push('/checkout')
        }else{
            history.push('/signin')
        }

        toggleCartHidden();
        onClick();
    }
    
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
                        :<p>Cart is empty <span role="img" aria-label="Sad Emoji"> &#128532; </span> </p>
                    }
                </div>
                <CustomButton onClick={handleClick}>
                    {
                        currentUser ? 'CHECKOUT' : 'SIGN IN TO CHECKOUT'
                    }
                </CustomButton>
            </div>
            : null
    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state),
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(CartDropdown)
);
