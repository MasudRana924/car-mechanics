import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        < >
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                         
                            

                        </Nav>
                        <Navbar.Text>


                            Signed in as: <a href="#login" className="text-danger text-decoration-none">{user?.displayName  }</a>
                            {
                              user?.email ? <Button onClick={logOut} variant="light">Logout</Button>: <Nav.Link as={Link} to="/login">Login</Nav.Link>
                          }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;