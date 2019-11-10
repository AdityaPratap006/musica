import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';


const CartDropdown = ({currentUser}) => {
    return (
        <div className='cart-dropdown'>
             <div className='cart-items'>

             </div>
             <CustomButton>
                {
                    currentUser?'CHECKOUT':'SIGN IN TO CHECKOUT'
                }
             </CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(
    mapStateToProps,
    null
)(CartDropdown);
