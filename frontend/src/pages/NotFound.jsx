import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__inner">
        <p className="not-found__code">404</p>
        <h1 className="not-found__heading">Page not found.</h1>
        <p className="not-found__sub">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">Back to Home</Link>
          <Link to="/contact" className="btn btn--outline">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
