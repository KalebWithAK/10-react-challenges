import { useState } from 'react'
import Header from '../components/header'
import '../styles/pages/counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className='page'>
      <Header />

      <main className='counter'>
        <h2>Counter</h2>

        <section>
          <button onClick={e => setCount((prev) => prev - 1)}>-</button>
          <p>{count}</p>
          <button onClick={e => setCount((prev) => prev + 1)}>+</button>
        </section>
      </main>
    </div>
  )
}