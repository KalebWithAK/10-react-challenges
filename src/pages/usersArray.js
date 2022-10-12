import Header from '../components/header'

export default function UsersArray() {
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  return (
    <div className='page'>
      <Header />

      <main>
        <h2>Display Array of Users</h2>

        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </main>
    </div>
  )
}