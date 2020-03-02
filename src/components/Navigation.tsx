import React from "react";
import { Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <NavLink to="/" activeClassName="activeLink">
                <Navbar.Brand>Passenger App</Navbar.Brand>
            </NavLink>
            <Nav className="mr-auto">
                <NavLink to="/about" activeClassName="activeLink">
                    Tietoa
                </NavLink>
            </Nav>
            <Dropdown>
                <DropdownButton
                    alignRight
                    id="dropdown-item-button"
                    title="Kaupunki"
                >
                    <Dropdown.Item eventKey="1">Helsinki</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Turku</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Näytä kaikki</Dropdown.Item>
                </DropdownButton>
            </Dropdown>
        </Navbar>
    );
}

export default Navigation;
