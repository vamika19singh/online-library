import { useLocation, Link } from "react-router-dom"

function NotFound() {
  const location = useLocation()

  return (
    <div className="p-6">
      <h1>404 - Page Not Found</h1>
      <p>Invalid URL: {location.pathname}</p>
      <Link to="/" className="text-blue-600">Go Home</Link>
    </div>
  )
}

export default NotFound
