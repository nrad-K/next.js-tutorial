import Link from 'next/link'

import Counter from './Counter'
import UserList from './users/UserList'

const Home = () => (
  <div className="m-4">
    <Link href="/users" className="underline" prefetch={false}>
      User
    </Link>
    <h1 className="text-2xl">Home</h1>
    <Counter>
      <h2 className="mt-4 text-lg font-bold">ユーザ一覧</h2>
      <UserList />
    </Counter>
  </div>
)

export default Home
