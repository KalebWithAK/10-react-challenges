import { useState } from 'react'
import Header from '../components/header'
import '../styles/pages/showHide.css'

export default function HideShow() {
  const [show, setShow] = useState(true)
  return (
    <div className='page'>
      <Header />

      <main>
        <h2>Show or Hide an Element</h2>

        <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Element</button>

        {show && <p>Toggle Challenge</p>}
      </main>
    </div>
  )
}