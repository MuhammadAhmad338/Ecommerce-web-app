import React from 'react';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className='newsletter-section'>
            <div className='newsletter-content'>
                <span className='small-text'>Newsletter</span>
                <span className='big-text'>Sign Up for latest updates and offers</span>
                <div className='form'>
                    <input type="text" placeholder='Email Address' />
                    <button>Subscribe</button>
                </div>
                <div className='text'>
                    Will be used in accordance with our privacy policy
                </div>
                <div className='social-icons'>
                    <div className='icon'>
                        <SlSocialFacebook />
                    </div>
                    <div className='icon'>
                        <SlSocialTwitter />
                    </div>
                    <div className='icon'>
                        <SlSocialGithub />
                    </div>
                    <div className='icon'>
                        <SlSocialGithub />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;