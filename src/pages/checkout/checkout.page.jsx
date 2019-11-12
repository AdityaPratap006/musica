import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';



const CheckoutPage = ({ cartItems, total }) => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    })

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
                    cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
                }
            </div>

            <div className='total'>  ₹ {total}</div>
            <div className='payment' style={{
               
                opacity:total>0?1:0.7
            }}>
                <StripeCheckoutButton  price={total} />
                <p>
                    Please use the following test credit card for payment:
                </p>
                <p>
                    4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                </p>

            </div>

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
