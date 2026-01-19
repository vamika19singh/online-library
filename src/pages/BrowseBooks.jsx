import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import BookCard from "../components/BookCard"

export default function BrowseBooks() {
  const { category } = useParams()
  const books = useSelector(state => state.books)
  const [search, setSearch] = useState("")

  const filtered = books.filter(book =>
    (category === "all" || book.category === category) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="p-6">
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search by title or author"
        onChange={e => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4">
        {filtered.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
