'use client'

import { useRouter } from 'next/navigation'
import { FormEventHandler, useState } from 'react'

const AddPost = () => {
  const router = useRouter()
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    await fetch('http://localhost:3000/api/posts/', {
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    setTitle('')
    setContent('')

    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
      <div>
        <label htmlFor="title">
          title:
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-sm border text-black"
            required
          />
        </label>
      </div>
      <div>
        <label htmlFor="content">
          content:
          <input
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="rounded-sm border text-black"
            required
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="rounded-lg bg-blue-500 px-2 py-1 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddPost
