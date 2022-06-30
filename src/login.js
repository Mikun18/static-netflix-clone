import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './MediaQueries/loginpage.css'

const Login = ({ setUser }) => {
  const navigate = useNavigate()

  const [value, setValue] = useState({
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState({
    email: false,
    password: false
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value.email ==='' && value.password === ''){
      return (
        setAlert({email:true, password:true})
      )
  }else{
      setUser({email:value.email});
      navigate('/home-page')
  }
  };
  return (
    <section className='login-main-header'>
        <div className='login-header'>
            <Link to='/' className='logo'>Netflix</Link>
        </div>

        <div className='container'>
           <h2>Sign In</h2>

          <form onSubmit={handleSubmit} className='login-form'>
            <div className='single-form'>
                <input type="text" name='email' placeholder='Email or Phone number' value={value.email} onChange={(e) => setValue(e.target.value)}/>
                {alert.email && <p>Please enter a valid email or phone number.</p>}
            </div>
            <div className='single-form'>
                <input type="password" name='password' placeholder='Password' value={value.password} onChange={(e) => setValue(e.target.value)}/>
                {alert.password && <p>Your password must contain between 4 and 60 characters.</p>} 
            </div>

                <button type='submit' className='login-btn'>Sign In</button>
          </form>

          <div className='help'>
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need help?</p>
          </div>

          <div className='con-footer'>
            <p><a href='#' className='facebook'>Login to Facebook</a></p>
            <p>New to Netflix? <a href='#' className='sign'>Sign up now</a></p>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#' className='
            learn'>Learn more.</a></p>
          </div>
        </div>
    </section>
  )
}

export default Login