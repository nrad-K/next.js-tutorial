import { NextPage } from 'next'

type Props = {
  params: {
    id: string
    categoryId: string
    userId: string
  }
  searchParams: object
}

const Page: NextPage<Props> = (props) => {
  const { params } = props
  const { id, categoryId, userId } = params
  return (
    <>
      <div>Blog ID: {id}</div>
      <div>User ID: {userId}</div>
      <div>Category ID: {categoryId}</div>
    </>
  )
}

export default Page
