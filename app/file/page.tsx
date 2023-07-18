'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

const File = () => {
  const [uploadFile, setUploadFile] = useState<File | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files && files[0]) {
      setUploadFile(files[0])
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!uploadFile) {
      return
    }
    const formData = new FormData()
    formData.append('file', uploadFile)

    const res = await fetch('http://localhost:3000/api/upload', {
      body: formData,
      method: 'POST',
    })

    const message = await res.json()
    console.log(message)
  }
  return (
    <div>
      <h1>ファイルアップロード</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleChange} />
        <button type="submit" className="bg-blue-600 px-2 py-1 text-white">
          アップロード
        </button>
      </form>
    </div>
  )
}

export default File
