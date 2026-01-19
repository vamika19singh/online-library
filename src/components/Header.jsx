import { NavLink } from "react-router-dom"

export default function Header() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? "bg-white text-blue-600"
        : "text-white hover:bg-blue-500"
    }`

  return (
    <header className="bg-blue-600 shadow">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-white text-xl font-bold">
          📚 Online Library
        </h1>

        <div className="flex gap-3">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/books/all" className={linkClass}>Browse Books</NavLink>
          <NavLink to="/add" className={linkClass}>Add Book</NavLink>
        </div>
      </nav>
    </header>
  )
}
