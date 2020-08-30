import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        if (isOpen === true) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <Navbar className="nav-dark py-3 bg-pri" dark expand="md" fixed="top">
            <Collapse isOpen={isOpen} navbar>
                <Nav className="my-3 mx-2" navbar>
                    <NavItem className="nav-item mx-md-2 mt-md-0">
                        <NavLink
                            onClick={closeNavbar}
                            tag={Link}
                            to="/"
                            activeClassName="active"
                            exact
                            path="/"
                        >
                            HOME
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item mx-md-2">
                        <NavLink
                            onClick={closeNavbar}
                            tag={Link}
                            to="/football"
                            activeClassName="active"
                        >
                            FOOTBALL
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item mx-md-2">
                        <NavLink
                            onClick={closeNavbar}
                            tag={Link}
                            to="/cricket"
                            activeClassName="active"
                        >
                            CRICKET
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item mx-md-2">
                        <NavLink
                            onClick={closeNavbar}
                            tag={Link}
                            to="/basketball"
                            activeClassName="active"
                        >
                            BASKETBALL
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item mx-md-2">
                        <NavLink
                            onClick={closeNavbar}
                            tag={Link}
                            to="/badminton"
                            activeClassName="active"
                        >
                            BADMINTON
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item mx-md-2">
                        <NavLink
                            onClick={closeNavbar}
                            tag={Link}
                            to="/pool"
                            activeClassName="active"
                        >
                            POOL
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <NavbarToggler onClick={toggle} />
            <NavbarBrand href="/">
                <img className="nav-logo mx-2" src="/asec_logo.svg" alt="ASEC" />
            </NavbarBrand>
        </Navbar>
    );
};
