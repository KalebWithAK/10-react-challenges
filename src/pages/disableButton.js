import { useState } from 'react'
import Header from '../components/header'

export default function DisableButton() {
  const [value, setValue] = useState('')

  function handleClick(e) {
    e.preventDefault()

    if (value) {
      //document.querySelector('p').innerHTML = value
      alert(value)
    }
  }

  return (
    <div className='page'>
      <Header />
      
      <main>
          <h2>Disable a Button if Input is Empty</h2>
          
          <form>
            <input type='text' onChange={e => setValue(e.target.value)} />
            <button onClick={e => handleClick(e)}>Submit</button>
          </form>
      </main>
    </div>
  )
}