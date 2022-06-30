import React from 'react'
import './index.css'
import './MediaQueries/homepage.css'

const Body = () => {
  return (
    <section className='main-body'>
        <div className='first-sec'>
            <div className='sub-first'>
                <h2>Enjoy on your TV</h2>
                <h5>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h5>
            </div>
            <img src='./Images/tv.png' />
         </div>

        <div className='second-sec'>
            <div className='sub-second'>
                <h2>Download your shows to watch offline</h2>
                <h5>Save your favorites easily and always have something to watch.</h5>
            </div>
            <img src='./Images/mobile.jpg' />
        </div>

        <div className='third-sec'>
            <h2>Watch everywhere</h2>
            <h5>Stream unlimited movies and TV shows on<br /> your phone, tablet, laptop, and TV.</h5>
        </div>

        <div className='fourth-sec'>
            <div className='sub-fourth'>
                <h2>Create profiles for kids</h2>
                <h5>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h5>
            </div>
            <img src='./Images/kids.png' />
        </div>
    </section>
  )
}

export default Body