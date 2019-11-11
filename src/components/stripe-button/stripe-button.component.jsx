import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import logo from '../../assets/logo.png';

const StripeCheckoutButton = ({price}) => {
    
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_SwBM1jWhvxW61dE4JLJirP2400fJG5KUki';
    
    const onToken = token => {
        console.log(token);
        alert(`This is just a dummy app, we don't accept real payments` );
    }

    return (
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
    )
}

export default StripeCheckoutButton;
