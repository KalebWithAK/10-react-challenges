import { useState } from 'react'
import Header from '../components/header'

import '../styles/pages/updateParent.css'

export default function UpdateParent() {
  return (
    <div className='page'>
      <Header />

      <main>
        <h2>Update Parent State From Child</h2>
        <Parent />

      </main>
    </div>
  )
}

function Parent() {
  const [updated, setUpdated] = useState(false)

  return (
    <div>
      <section>
        <h3>Parent</h3>

        <div className='wrapper'>{!updated ? 'I need to be updated from my child!' : 'Parent has been updated!'}</div>
      </section>

      <Child updateParent={setUpdated} />
    </div>
  )
}

function Child({ updateParent }) {
  return (
    <section>
      <h3>Child</h3>

      <button onClick={() => updateParent(true)}>Change Parent Value</button>
    </section>
  )
}