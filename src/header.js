import React from 'react'
import { Link } from 'react-router-dom'
import Input from './input'
import './index.css'

const Header = () => {
  return (
    <div className='main-header'>
        <section className='header'>
            {/* <h1>NETFLIX</h1> */}
            <Link to='/' className='logo'>NETFLIX</Link>
            <Link to='login' className='link'>Sign in</Link>
        </section>

        <article className='showcase'>
            <h2>Unlimited movies, Tv<br/> shows and more.</h2>
            <h4>Watch anywhere. Cancel anytime</h4>
            <div>
                <Input />
            </div>
        </article>
    </div>
  )
}

export default Header