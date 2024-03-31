import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="link">
        <Link to="/" className="button">
          Home
        </Link>
        <Link to="/create" className="button">
          Create
        </Link>
      </div>
    </>
  );
}
export default Header;
