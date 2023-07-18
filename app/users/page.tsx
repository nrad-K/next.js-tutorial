import { Suspense } from 'react'

import OtherUserList from './OtherUserList'
import UserList from './UserList'

const Page = async () => (
  // const response = await fetch('http://localhost:3000/api', {
  //   body: JSON.stringify({
  //     name: 'John',
  //     email: 'john@example.com',
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   method: 'POST',
  // })

  // const data = await response.json()

  <div className="m-4">
    <h1 className="text-lg font-bold">ユーザ一覧</h1>
    <Suspense fallback={<p className="text-red-700">Loading UserList...</p>}>
      <UserList />
    </Suspense>
    <Suspense fallback={<p>Loading OtherUserList...</p>}>
      <OtherUserList />
    </Suspense>
  </div>
)

export default Page
