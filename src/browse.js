import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Add from './add'

const Browse = () => {
  const [add, setAdd] = useState(false);
  const [people, setPeople] = useState([]);

  return (
    <div className='account'>
        {add && <Add setAdd={setAdd} people={people} setPeople={setPeople}/>}
      <section className='header'>
            <h1>NETFLIX</h1>
        </section>

        <div className='who'>
          <h1>Who is watching Netflix?</h1>
          <button onClick={() => setAdd(true)}>Add</button>
        </div>

        {people.map((person) => {
            const { name } = person;
            return(
              <div className='indi'>
                <Link to='/netflix' className='person'>{name}</Link>
              </div>
            )
        })}

         {/* <article className='act-con'>
          <div className='who'>
              <Link to='/netflix' className='makin'>Odumakinde</Link>
              <Link to='/netflix' className='mide'>Ayomide</Link>
              <Link to='/netflix' className='posi'>Ayomiposi</Link>
              <Link to='/netflix' className='mikun'>Ayomikun</Link>
              <Link to='/netflix' className='add'>+</Link>
          </div>
        </article> */}
    </div>
  )
}

export default Browse