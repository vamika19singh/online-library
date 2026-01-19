import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/books/all">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  )
}
