import { Component } from "react";
import { Navbar, Nav, Image, Dropdown } from "react-bootstrap";
import netflix_logo from "../media/netflix.png";
import profile_icon from "../media/Profile_avatar_placeholder_large.png";
import "../App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <Image src={netflix_logo} className="logo" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-margin">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Tv Shows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#pricing">Recently Added</Nav.Link>
            <Nav.Link href="#pricing">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <AiOutlineSearch />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              KIDS
            </Nav.Link>
            <Nav.Link href="#deets">
              <IoMdNotificationsOutline />
            </Nav.Link>
            <Dropdown
              key="left"
              id="dropdown-button-drop-left"
              drop="left"
              className="mx-2"
            >
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-button-drop-left"
              >
                <Image src={profile_icon} className="profile-logo" fluid />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
