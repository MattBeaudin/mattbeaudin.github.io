import * as React from "react";
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class HeaderNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            navOpen: false
        };
    }

    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen 
        });
    }

    render() {
        return(
            <Navbar color="dark" dark expand="sm">
                <Container inNavbar>
                    <NavbarBrand href="/">matthewbeaud.in</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/matt-beaudin/">LinkedIn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/mattbeaudin">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}
