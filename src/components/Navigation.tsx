import React, { useState } from "react";
import { Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as postActions from "../redux/actions/postActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Navigation(props: any) {
    const [filter, setFilter]: any = useState(undefined);

    function filtering(filterParam: string) {
        setFilter(filterParam);
        props.actions.filterPosts(filterParam);
    }

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
                    title={filter ? filter : "Kaupunki"}
                    variant="danger"
                    value={filter}
                    onSelect={(eventKey: any, event: Object) =>
                        filtering(eventKey)
                    }
                >
                    <Dropdown.Item eventKey="Helsinki">Helsinki</Dropdown.Item>
                    <Dropdown.Item eventKey="Turku">Turku</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey={undefined}>
                        Näytä kaikki
                    </Dropdown.Item>
                </DropdownButton>
            </Dropdown>
        </Navbar>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Navigation);
