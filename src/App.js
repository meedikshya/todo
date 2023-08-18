import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Card from 'react-bootstrap/Card';
import img from "./bodyimg.svg";

import icon1 from "./pngegg.png";

function App() {
  return (
    <div className="App">
       <>

      
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home" className='logo'>
            <img src={icon1} alt='image' height="30px" width="40px"  />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Add Items</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

<div className='body'>
<div className='sectionI'>
  <img src= {img} className='imageBody' alt='image' height="700px" width= "500px" />
  </div>

<div className='sectionII'>
<p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <u className='title'>Task-List</u>
            </p>
            <form class="d-flex justify-content-center align-items-center mb-4" className='inputHome'>
              <div class="form-outline flex-fill">
                <input type="text" id="form3" class="form-control form-control-lg" placeholder='New Task...' />
              </div>
              <input className='addButton' type='button' value="ADD" />
            </form>

<br/>
  <br/>

            <div className='list'>
            <p>
            <ul>
              <li>List 1 Edit/ Delete</li>
              <li>List 2 Edit/ Delete</li>

            </ul>
          </p>
            </div>
</div>
</div>


<div className='footer'>
      <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Don't forget to Sign Up.</Card.Title>
        <Card.Text>
        Get Notified with our latest update.
        </Card.Text>
        <input type='email'/>
        <input className='button' type='button' value="Subscribe" />

        <section class="">
        <div class="container text-center text-md-start mt-5">
       
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
            Quick Links
          </h6>
          <p>
            <a href="#!" class="text-reset">Help and Support</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Feedback</a>
          </p>
          
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Contact US</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          </div>


        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
            Follow US
          </h6>
          <div class="container pt-4">

    <section class="mb-4">
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f  "></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>
      
      
      </section>

        </div>
      </div>
    </div>
    </div>
    </section>

      </Card.Body>
      <Card.Footer className="text-muted">
      <div class="text-center text-dark p-3">
    © 2020 Copyright:
    <a class="text-dark" href=""> jdiwjdwiqss@.com </a>
  </div>
      </Card.Footer>
      
    </Card>
    </div>
    
    
    </>
    </div>
  );
}

export default App;
