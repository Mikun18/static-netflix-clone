import React from 'react'
import { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Add = ({ setAdd, people, setPeople }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            const person = {name: name}
            setPeople((people) => {
                return[...people, person]
            });
            setName('');
            setAdd(false);
        }else alert('Enter a Name')
    }


  return (
    <div className='add-profile'>
        <section className='header'>
             <Link to='/' className='logo'>NETFLIX</Link>
        </section>

        <article className='add-name'>
            <h1>Add Profile</h1>
            <p>Add a profile for another person watching Netflix</p>

            <div className='add-input'>
                <form onSubmit={handleSubmit}>
                    <div className='sub-form'>
                        <img src="./avatar.png"/>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                    </div>
                    <button className='btn-ctn'>Continue</button>
                    <button onClick={() => setAdd(false)} className='btn-clear'>Cancel</button>
                </form>
            </div>
        </article>
    </div>
  )
}

export default Add