import { useEffect, useState } from 'react'
import Header from '../components/header'

export default function Fetch() {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const abort_controller = new AbortController()
    const signal = abort_controller.signal

    fetch('https://jsonplaceholder.typicode.com/users/1', { signal })
    .then(response => response.json())
    .then(data => setUserData(data))
    .catch(error => {
      console.error(`API request error: ${error.message}`)
    }) 

    return () => {
      abort_controller.abort()
    }
  }, [])

  return (
    <div className='page'>
      <Header />

      <main className='fetch'>
        <h2>Fetch Data from API</h2>

        <section>
          <h3>User Data</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Website:</strong> {userData.website}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </section>
      </main>
    </div>
  )
}