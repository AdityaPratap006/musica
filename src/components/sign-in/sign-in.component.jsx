import React, { useState } from 'react'
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';


const SignIn = () => {

    const [formData, setFormData] = useState({
        email:'',
        password:''
    });
   

    const handleSubmit = event => {
        event.preventDefault();
       
        setFormData({
            ...formData,
            email:'',
            password:''
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
            <h2>New here?</h2>
            <span>Sign up and create an account</span>
            
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

                <input 
                    type="submit" 
                    value="Sign In"
                />
            </form>
        </div>
    )
}

export default SignIn;
