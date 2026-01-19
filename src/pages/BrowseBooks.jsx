import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import BookCard from "../components/BookCard"

function BrowseBooks() {
  const { category } = useParams()
  const books = useSelector(state => state.books)
  const [search, setSearch] = useState("")

  const filteredBooks = books.filter(book => {
    const matchesCategory = category ? book.category === category : true
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by title or author"
        className="border p-2 w-full"
        onChange={e => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4 mt-6">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BrowseBooks
