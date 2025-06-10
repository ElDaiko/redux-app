import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Counter</Link> | <Link to="/counterNumber">About</Link>
    </nav>
  );
};

export default NavBar;
