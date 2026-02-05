import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="blog-link">
          <h2 className="blog-title">Tosin's Blog</h2>
        </Link>
      </nav>
    </>
  );
}

export default Header;
