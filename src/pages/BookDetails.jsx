import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function BookDetails() {
  const { id } = useParams()
  const book = useSelector(state =>
    state.books.find(b => b.id === id)
  )

  return (
    <div className="p-6">
      <h2 className="text-2xl">{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>

      <Link to="/books/all" className="text-blue-600 underline">
        Back to Browse
      </Link>
    </div>
  )
}
