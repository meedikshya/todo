import Card from 'react-bootstrap/Card';
export const Footer = () => {
    return (
        <div className="footerPage">
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
        </div>
    )
}