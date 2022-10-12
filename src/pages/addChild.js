import Header from '../components/header'
import '../styles/pages/addChild.css'

export default function AddChild() {
  return (
    <div className='page'>
      <Header />
      
      <main>
        <h2>Dynamic React Children</h2>

        <Parent>
          <Child />
          <Child />
          <Child />
        </Parent>
      </main>
    </div>
  )
}

function Parent({ children }) {
  return (
    <section>
      This is parent Content

      {children}
    </section>
  )
}

function Child() {
  return (
    <section className='child'>
      This is child content
    </section>
  )
}