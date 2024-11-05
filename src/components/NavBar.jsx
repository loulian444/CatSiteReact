import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section id="navbarSec">
      <Link to={`/`}>Home</Link>
      <Link to={`/gallery`}>Gallery</Link>
    </section>
  );
};

export default NavBar;
