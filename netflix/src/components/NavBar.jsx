import { Navbar, Image, Form } from "react-bootstrap";
import netflix_logo from "../media/netflix-logo.png";
import profile_icon from "../media/account_img.png";
import "../App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import FetchMovies from "./FetchMovies.jsx";

const NavBar = (props) => {
  const [query, setQuery] = useState(null);
  const Search = () => {
    return (
      <IconContext.Provider value={{ className: "search" }}>
        <div>
          <AiOutlineSearch />
        </div>
      </IconContext.Provider>
    );
  };

  const Bell = () => {
    return (
      <IconContext.Provider value={{ className: "bell" }}>
        <div>
          <FaBell />
        </div>
      </IconContext.Provider>
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="fixed-top">
      <div className="my-nav-container">
        <div className="nav-link">
          <Image src={netflix_logo} fluid className="netflix-logo-nav" />
        </div>
        <ul className="navbar-nav mr-auto">
          <li
            className={
              props.location.pathname === "/" ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={
              props.location.pathname === "/tv-shows"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/tv-shows">
              TV Shows
            </Link>
          </li>
          <li
            className={
              props.location.pathname === "/movies"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li
            className={
              props.location.pathname === "/add"
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/add">
              Add Form
            </Link>
          </li>
        </ul>
        <Link className="nav-link right" to="/search">
          {props.location.pathname === "/search" ? (
            <Form>
              <Form.Control
                type="text"
                placeholder="Search here..."
                onChange={(e) => {
                  setQuery(e.target.value);
                  <FetchMovies query={query} />;
                }}
              />
            </Form>
          ) : (
            Search()
          )}
        </Link>
        <div className="nav-link right">{Bell()}</div>
        <div class="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={profile_icon} className="profile-logo" />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default withRouter(NavBar);
