import { link } from "react-router-dom";


export const Navbar = () => {
    return (

        <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home" className='logo'>
            <img src={icon1} alt='image' height="30px" width="40px"  />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/Add">Add Items</Nav.Link>
            <Nav.Link to="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
}