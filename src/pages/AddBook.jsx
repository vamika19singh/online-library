import { useDispatch } from "react-redux"
import { addBook } from "../redux/booksSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AddBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = e => {
    e.preventDefault()

    if (!form.title || !form.author) return alert("All fields required")

    dispatch(addBook({ ...form, id: Date.now().toString() }))
    navigate("/books/all")
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Author" onChange={e => setForm({ ...form, author: e.target.value })} />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
      <button className="bg-blue-600 text-white px-4 py-2">Add Book</button>
    </form>
  )
}
