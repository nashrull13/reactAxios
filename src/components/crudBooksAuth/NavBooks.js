import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
//import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href={"/"}>Book Form</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/getbook" tag={RRNavLink}>
              Fetch Books
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/postbook" tag={RRNavLink}>
              Post Books
            </NavLink>
          </NavItem>          
          <NavItem>
            <NavLink to="/register" tag={RRNavLink}>
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" tag={RRNavLink}>
              Login Form
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBook;
