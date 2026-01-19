import { Link } from "react-router-dom"

export default function BookCard({ book }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{book.title}</h3>
      <p>{book.author}</p>
      <Link
        className="text-blue-600 underline"
        to={`/book/${book.id}`}
      >
        View Details
      </Link>
    </div>
  )
}
