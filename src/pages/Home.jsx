import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import BookCard from "../components/BookCard"

export default function Home() {
  const books = useSelector(state => state.books)

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <section className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to the Online Library
        </h2>
        <p className="text-gray-600">
          Discover books, explore categories, and grow your reading list.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Categories</h3>
        <div className="flex gap-4 flex-wrap">
          {["Fiction", "Sci-Fi", "Non-Fiction"].map(cat => (
            <Link
              key={cat}
              to={`/books/${cat}`}
              className="px-4 py-2 bg-white rounded shadow hover:bg-blue-600 hover:text-white transition"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Popular Books
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.slice(0, 3).map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  )
}
