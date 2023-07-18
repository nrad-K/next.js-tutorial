import Link from 'next/link'

export type User = {
  id: string
  name: string
  email: string
}

const UserList = async () => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 5000)
  // })

  // const response = await fetch('http://jsonplaceholder.typicode.com/users')

  const response = await fetch('http://localhost:3000/api', {
    next: { revalidate: 5 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const users: User[] = await response.json()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default UserList
