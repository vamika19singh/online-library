import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import BookCard from "../components/BookCard"

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"]

function Home() {
  const books = useSelector(state => state.books)

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to Online Library</h1>

      <h2 className="mt-6 text-xl">Categories</h2>
      <div className="flex gap-4 mt-2">
        {categories.map(cat => (
          <Link key={cat} to={`/books/${cat}`} className="text-blue-600">
            {cat}
          </Link>
        ))}
      </div>

      <h2 className="mt-8 text-xl">Popular Books</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {books.slice(0, 2).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default Home
