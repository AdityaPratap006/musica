import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, onClick, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} onClick={onClick} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
