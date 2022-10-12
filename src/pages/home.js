import Header from "../components/header";

export default function Home() {
  return (
    <div className='page home'>
      <Header />
      <main>
        <h2>Welcome to 10 ReactJS Coding Challenges</h2>
        <p><a href='https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7'>original exercises</a> by <a href='https://dev.to/frontendengineer'>Let's Code</a></p>

        <ul>
          <li><a href='/#/'>Display simple JSX</a></li>
          <li><a href='/#/array'>Display array of users to browser</a></li>
          <li><a href='/#/show-hide'>Show/Hide Element on the Screen</a></li>
          <li><a href='/#/data-bind'>2 way data binding in ReactJS</a></li>
          <li><a href='/#/disable-button'>Disable a button</a></li>
          <li><a href='/#/parent-state'>Update the parent state</a></li>
          <li><a href='/#/add-child'>Dynamically add child components (React Children)</a></li>
          <li><a href='/#/sum'>Sum of Two Numbers</a></li>
          <li><a href='/#/counter'>Create Counter App</a></li>
          <li><a href='/#/fetch'>Fetch data from an API</a></li>
        </ul>
      </main>
    </div>
  )
}