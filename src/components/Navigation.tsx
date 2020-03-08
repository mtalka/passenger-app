import React from "react";
import { Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Navigation() {
    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Nav className="mr-auto">
                <NavLink
                    to="/"
                    activeClassName="activeLink"
                    className="topbar-nav-link"
                >
                    Syöte
                </NavLink>
                <NavLink
                    to="/about"
                    activeClassName="activeLink"
                    className="topbar-nav-link"
                >
                    Tietoa
                </NavLink>
            </Nav>
            <Dropdown>
                <DropdownButton
                    alignRight
                    id="dropdown-item-button"
                    title="Kaupunki"
                    variant="danger"
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
