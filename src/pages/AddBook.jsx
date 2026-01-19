import { useDispatch } from "react-redux"
import { addBook } from "../redux/booksSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AddBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: ""
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(form).some(v => v === "")) {
      alert("Please fill all fields")
      return
    }

    dispatch(addBook({ ...form, id: Date.now().toString() }))
    navigate("/books/all")
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Add New Book</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        {["title", "author", "category", "rating"].map(field => (
          <input
            key={field}
            name={field}
            placeholder={field.toUpperCase()}
            value={form[field]}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
        ))}

        <textarea
          name="description"
          placeholder="DESCRIPTION"
          value={form.description}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Book
        </button>
      </form>
    </main>
  )
}
