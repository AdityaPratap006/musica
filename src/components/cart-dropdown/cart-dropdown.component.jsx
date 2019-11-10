import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({currentUser, hidden, toggleCartHidden}) => {
    return (
        !hidden?
        <div className='cart-dropdown'>
             <div className='close-btn' onClick={toggleCartHidden} > &times; </div>
             <div className='cart-items'>

             </div>
             <CustomButton>
                {
                    currentUser?'CHECKOUT':'SIGN IN TO CHECKOUT'
                }
             </CustomButton>
        </div>
        :null
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDropdown);
