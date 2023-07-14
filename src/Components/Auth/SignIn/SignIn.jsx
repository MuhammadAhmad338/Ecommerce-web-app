import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className='signIn-form'>
            <p className='signIn-title'>Sign In</p>
            <form action="">
                <label htmlFor="">Email</label>
                <input type='email' name='email' placeholder='Enter your email' />
                <label htmlFor="">Password</label>
                <input type='password' name='password' placeholder='Enter your password' />
            </form>
            <button className='signIn-button'>Sign In</button>

            <div className='signIn-account'>
                <p>Don't have an account?</p>
                <a href="/signUp">SignUp</a>
            </div>
        </div>
    );
}

export default SignIn;