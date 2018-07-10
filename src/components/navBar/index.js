import React from 'react';
import { Navbar, Nav, NavItem,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles.css"



export default class navBar extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Navbar default>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> <Image className="main-logo" src="../assets/logo.png"/> </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        { (this.props.route === 'home') &&
                            <NavItem eventKey={1} componentClass={Link} href="/contact" to="/contact">
                                Hi
                            </NavItem>
                        }
                        { (this.props.route === 'contact') &&
                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                Back
                            </NavItem>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
