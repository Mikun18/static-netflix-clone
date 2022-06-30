import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Add from './add'
import './MediaQueries/addpage.css'

const Browse = () => {
  const [add, setAdd] = useState(false);
  const [people, setPeople] = useState([]);

  const removeItem = (name) => {
    let newPeople = people.filter((person) => person.name !== name);
      setPeople(newPeople);
  }

  return (
    <div className='account'>
        {add && <Add setAdd={setAdd} people={people} setPeople={setPeople}/>}
      <section className='header'>
          <Link to='/' className='logo'>NETFLIX</Link>
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
                <button onClick={() => removeItem(name)}>Remove</button>
              </div>
            )
        })}
    </div>
  )
}

export default Browse