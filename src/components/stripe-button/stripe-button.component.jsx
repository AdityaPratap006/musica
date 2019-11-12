import React from 'react';
import './stripe-button.styles.scss';

import StripeCheckout from 'react-stripe-checkout';

import logo from '../../assets/logo.png';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { removeCartItem } from '../../redux/cart/cart.actions';

import { addToUserPurchaseList } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const StripeCheckoutButton = ({price, cartItems, removeCartItem, currentUser}) => {
    
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_SwBM1jWhvxW61dE4JLJirP2400fJG5KUki';
    
    const onToken = token => {
        console.log(token);
        
        addToUserPurchaseList(currentUser.id, cartItems);
        
        cartItems.forEach(item => {
            removeCartItem(item);
           
        })

       

    }

    return (
        price > 0 ?
        <StripeCheckout 
            label='PAY NOW'
            name="Musica: Your Music Store!"
            billingAddress
            shippingAddress
            image={logo}
            currency='INR'
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            panelLabel = "PAY NOW"
            token={onToken}
            stripeKey={publishableKey}
        />
        :<div className='disabled-pay-button'>
             PAY NOW
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
    removeCartItem: song => dispatch(removeCartItem(song))  
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StripeCheckoutButton);
