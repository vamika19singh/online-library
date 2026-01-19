import { useLocation, Link } from "react-router-dom"

function NotFound() {
  const location = useLocation()

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl">404 - Page Not Found</h1>
      <p>Invalid URL: {location.pathname}</p>
      <Link to="/" className="text-blue-600 underline">Go Home</Link>
    </div>
  )
}

export default NotFound
