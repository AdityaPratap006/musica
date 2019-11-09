import React, { useState } from 'react'
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = event => {
        event.preventDefault();

        setFormData({
            ...formData,
            email: '',
            password: ''
        })
    }

    const handleChange = event => {

        const { value, name } = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }



    return (
        <div className='sign-in'>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={formData.email}
                    required
                    handleChange={handleChange}
                />


                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={formData.password}
                    required
                    handleChange={handleChange}
                />

                <div className='buttons'>
                    <CustomButton type="submit" > SIGN IN </CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}> SIGN IN WITH GOOGLE </CustomButton>
                </div>

            </form>
            <h2 className='title'>New here?</h2>
            <span>Go to Sign up or Simply use Google Sign In!</span>

        </div>
    )
}

export default SignIn;
