import React from 'react';
import './Icon.js';
import googlelogo from './Images/google-logo.jpg';
import facebooklogo from './Images/facebook-logo.jpg';
import twitterlogo from './Images/Twitter-Logo.png';

export default function Icon() {
  return (
    <div>
        <p className='or-login'>or login with</p>
        
        <img className=' google-logo' src={googlelogo} alt='not-show' width={40} height={40}/>
        <img className=' facebook-logo' src={facebooklogo} alt='not-show' width={40} height={40}></img>
        <img className=' twitter-logo' src={twitterlogo} alt='not-show' width={40} height={40}></img>
        <p className='text1' style={{fontSize:12,fontWeight:500,marginTop:30}}>Don't have an account? <span style={{color: '#ff0066' }}>Create new now!</span></p>
        <p className='text2'  style={{fontSize:12,fontWeight:500,marginTop:30}}>By singning up, you are agree with our <span style={{color: '#ff0066',textDecoration:'underline',cursor:'pointer' }}>Terms & Conditions</span></p>
       
    </div>
  )
}
