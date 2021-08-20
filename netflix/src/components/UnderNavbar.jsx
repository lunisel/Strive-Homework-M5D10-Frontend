import { Component } from "react";
import { Navbar, NavDropdown, Nav, Form } from "react-bootstrap";
import { MdLibraryBooks } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";

class UnderNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" className="mb-4">
        <Navbar.Brand href="#home" className="pl-3">
          Tv Shows
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Genres" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form.Group>
            <MdLibraryBooks className="form-svg" />
            <VscLibrary className="form-svg" />
          </Form.Group>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default UnderNavbar;
