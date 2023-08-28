import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <button className="nav-logout-button">Logout</button>
      </ul>
    </nav>
  );
}