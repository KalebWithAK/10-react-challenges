import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className='page'>
      <main>
        <h1>Oopsie Doopsie!</h1>
        <p>You have run into an error. I'm currently resolving this issue.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <a href='/'>&larr; Back to Home</a>
      </main>
    </div>
  )
}