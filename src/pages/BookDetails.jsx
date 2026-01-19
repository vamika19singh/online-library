import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function BookDetails() {
  const { id } = useParams()
  const book = useSelector(state =>
    state.books.find(b => b.id === id)
  )

  if (!book) {
    return <p className="p-6">Book not found</p>
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-2">
          {book.title}
        </h2>
        <p className="text-gray-600 mb-4">
          by {book.author}
        </p>

        <p className="mb-4">{book.description}</p>

        <p className="font-semibold mb-6">
          ⭐ Rating: {book.rating}
        </p>

        <Link
          to="/books/all"
          className="inline-block text-blue-600 hover:underline"
        >
          ← Back to Browse
        </Link>
      </div>
    </main>
  )
}
