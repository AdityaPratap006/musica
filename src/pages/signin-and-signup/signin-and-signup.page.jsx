import React from 'react';
import './signin-and-signup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const SigninPage = () => {
    return (
        <div className='signin-and-signup-page'>
            <h1>LOG IN</h1>
            <SignIn/>
        </div>
    )
}

export default SigninPage;
