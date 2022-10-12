import { useState } from 'react'
import Header from '../components/header'

export default function DataBinding() {
  const [data, setData] = useState('')

  return (
    <div className='page'>
      <Header />

      <main>
        <h2>2 Way Data Binding</h2>
        <input type='text' placeholder='Enter Text' onChange={e => setData(e.target.value)} />
        <p>{data}</p>
      </main>
    </div>
  )
}