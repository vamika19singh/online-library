import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import BookCard from "../components/BookCard"

export default function BrowseBooks() {
  const { category } = useParams()
  const books = useSelector(state => state.books)
  const [search, setSearch] = useState("")

  const filteredBooks = books.filter(book =>
    (category === "all" || book.category === category) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Browse Books
      </h2>

      <input
        type="text"
        placeholder="Search by title or author..."
        className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No books found.
        </p>
      )}
    </main>
  )
}
