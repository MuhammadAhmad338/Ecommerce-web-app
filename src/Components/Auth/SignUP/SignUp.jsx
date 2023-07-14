import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='signUp-form'>            
            <p className='signUp-title'>Sign Up</p>
            <form action="">
                <label className='signUp-text' htmlFor="">Username</label>
                <input type='text' name='text' placeholder='Enter your username' />
                <label className='signUp-text' htmlFor="">Email</label>
                <input type='email' name='email' placeholder='Enter your email' />
                <label className='signUp-text' htmlFor="">Password</label>
                <input type='password' name='password' placeholder='Enter your password' />
            </form>
            <button className='signUp-button'>Sign Up</button>
            <div className='signUp-account'>
                <p>Already have an account?</p>
                <a href="/signIn">SignIn</a>
            </div>
        </div>
    );
}

export default SignUp;