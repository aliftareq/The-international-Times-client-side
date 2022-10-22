import React, { useContext } from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);
    console.log(user);
    //navigation 
    const navigate = useNavigate()
    //handler
    const handleSignOut = () => {
        LogOut()
        navigate('/login')
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'>The Internation Times</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All news</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className=''>
                        <Nav>
                            {
                                user?.uid
                                    ?
                                    <div className='d-flex align-items-center'>
                                        <span className='mx-2 text-white'>
                                            {
                                                user?.displayName
                                                    ? user?.displayName
                                                    : 'Anonymous'
                                            }
                                        </span>

                                        <Button onClick={handleSignOut} className='mx-2' variant="light">Logout</Button>
                                    </div>
                                    :
                                    <>
                                        <Link className='mx-2' to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>

                                    </>
                            }
                            <Link to='/profile'>
                                {
                                    user?.photoURL
                                        ? < Image className='mx-2' roundedCircle src={user?.photoURL} style={{ height: '40px' }}>
                                        </Image>
                                        : <FaUserCircle className='text-warning mx-2' />
                                }
                            </Link>

                        </Nav>
                        <Nav>

                        </Nav>
                    </Nav>
                    <Nav className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;