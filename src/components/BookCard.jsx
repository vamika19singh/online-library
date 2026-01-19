import { Link } from "react-router-dom"

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          by {book.author}
        </p>
        <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {book.category}
        </span>
      </div>

      <Link
        to={`/book/${book.id}`}
        className="mt-4 inline-block text-center text-blue-600 border border-blue-600 rounded-md py-1 hover:bg-blue-600 hover:text-white transition"
      >
        View Details
      </Link>
    </div>
  )
}
