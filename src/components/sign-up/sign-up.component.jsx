import React, { useState  } from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {

    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async event => {
        event.preventDefault();

       

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match! Please re-type the password");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(formData.email, formData.password);

            await createUserProfileDocument(user, { displayName: formData.displayName })

            setFormData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
            if(error && error.code === 'auth/weak-password'){
                alert(error.message);
            }
        }
    }

    return (
        <div className='sign-up'>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </div>
            </form>
            <h2 className='title'>Already have an account?</h2>
            <span>Go to Sign in!</span>
        </div>
    )
}

export default SignUp;
