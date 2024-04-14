import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1>Movies</h1>
        <nav className="navlink-wrapper">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'linkActive' : 'Navlinks')}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? 'linkActive' : 'Navlinks')}
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
