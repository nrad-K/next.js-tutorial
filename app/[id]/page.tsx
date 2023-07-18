import { NextPage } from 'next'

type Props = {
  params: {
    id: string
  }
  searchParams: object
}

const Page: NextPage<Props> = (props) => {
  const { params } = props
  const { id } = params

  return <div className="m-4 font-bold">Blog ID: {id}</div>
}

export default Page
