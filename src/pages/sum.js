import { useState } from 'react'
import Header from '../components/header'
import '../styles/pages/sum.css'

export default function Sum() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result, setResult] = useState()

  return (
    <div className='page'>
      <Header />

      <main>
        <h2>Adding Two Numbers</h2>

        <input type='number' onChange={e => setNum1(e.target.value)} placeholder='first number' />
        <input type='number' onChange={e => setNum2(e.target.value)} placeholder='second number' />

        <button onClick={() => num1 && num2 && setResult(Number(num1) + Number(num2))}>Add Two Numbers</button>

        <p>{result && `Total: ${result}`}</p>
      </main>
    </div>
  )
}