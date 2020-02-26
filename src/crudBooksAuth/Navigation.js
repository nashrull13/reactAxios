
import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from "reactstrap";

function Navigation () {
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );

  function logout() {
    sessionStorage.setItem("persisted_state_hook:token", "");
    sessionStorage.clear();
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (!token) {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>BOOKS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/login" tag={RRNavLink}>
                Login
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/register" tag={RRNavLink}>
                Register
            </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else if (token.token.Role === "ADMIN") {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>BOOKS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/homeadmin" tag={RRNavLink}>
                Home
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/getbook" tag={RRNavLink}>
                List Books (Admin)
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/postbook" tag={RRNavLink}>
                Add Book
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/getuser" tag={RRNavLink}>
                List User
                </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/getbookbyid" tag={RRNavLink}>
                Get Book id
                </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink onClick={logout} to="/login" tag={RRNavLink}>
                Logout
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } else if (token.token.Role === "USER") {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>BOOKS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/homeuser" tag={RRNavLink}>
                Home
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/getbook" tag={RRNavLink}>
                List Books
                </NavLink>
            </NavItem>            
            <NavItem>
              <NavLink onClick={logout} to="/login" tag={RRNavLink}>
                Logout
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

