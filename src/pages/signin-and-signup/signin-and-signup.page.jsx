import React, { useState, useEffect } from 'react';
import './signin-and-signup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninPage = () => {

    const [section, setSection] = useState('signin');

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <div className='signin-and-signup-page'>
            <div className='container'>
                <div className='tabs'>
                    <button className={`${(section === 'signin') ? 'active' : ''}`} onClick={() => { setSection('signin') }}>SIGN IN</button>
                    <button className={`${(section === 'signup') ? 'active' : ''}`} onClick={() => { setSection('signup') }}>SIGN UP</button>
                </div>
                {
                    (section === 'signin') ? <SignIn /> : <SignUp />
                }
            </div>

        </div>
    )
}

export default SigninPage;
