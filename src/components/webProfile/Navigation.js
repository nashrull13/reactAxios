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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href={"/"}>React Task</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/home" tag={RRNavLink}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" tag={RRNavLink}>
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" tag={RRNavLink}>
              About
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Form
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink to="/form" tag={RRNavLink}>
                  Single Form
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/multiform" tag={RRNavLink}>
                  Multi Form
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/validateform" tag={RRNavLink}>
                  Validate Form
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink to="/getbook" tag={RRNavLink}>
              List Book
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default Navigation;
