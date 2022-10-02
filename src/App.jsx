import { useState } from 'react'
import './App.css'
import './App.scss'
import logo from './assets/images/react.svg'

export const App = () => {
  const [name, setName] = useState('')

  const handleChange = event => {
    setName(event.target.value)
  }

  return (
    <div className='app'>
      <h1>
        <img src={logo} alt='react logo' width='25' /> Hello React whit Webpack!!!
      </h1>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' value={name} onChange={handleChange} />
      </div>
    </div>
  )
}
