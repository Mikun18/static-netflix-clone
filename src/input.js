import React from 'react'
import { useState } from 'react'
import './index.css'
import './MediaQueries/homepage.css'

const Input = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
       e.preventDefault();
       setEmail('')
    };

  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
                <label>Ready to watch? Enter your email to create or restart your membership.</label>
                <input type="text" name='email' placeholder='Enter email address' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <button type='submit'>Get Started </button>
            </form>
    </div>
  )
}

export default Input