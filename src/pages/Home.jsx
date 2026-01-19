import { Link } from "react-router-dom"
import BookCard from "../components/BookCard"
import { useSelector } from "react-redux"

export default function Home() {
  const books = useSelector(state => state.books)

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Welcome to Online Library</h1>

      <div className="flex gap-4 mb-6">
        <Link to="/books/Fiction">Fiction</Link>
        <Link to="/books/Sci-Fi">Sci-Fi</Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {books.slice(0, 2).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
