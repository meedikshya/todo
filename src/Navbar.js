import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import icon1 from "./pngegg.png";

import Navbar from 'react-bootstrap/Navbar'

export const Navbarr = () => {
    return (

        <Navbar className="asdfg">
        <Container>
          <Navbar.Brand href="#home" className='logo'>
            <img src={icon1} alt='image' height="30px" width="40px"  />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/Add">Add Items</Link>
            <Link to="/Profile">Profile</Link>
          </Nav>
        </Container>
      </Navbar>

    )
}