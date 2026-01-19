import { Link, useLocation } from "react-router-dom"

export default function NotFound() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="mb-4 text-gray-600">
        No page found for: {location.pathname}
      </p>
      <Link
        to="/"
        className="text-blue-600 underline"
      >
        Go back Home
      </Link>
    </div>
  )
}
