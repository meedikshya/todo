import Card from 'react-bootstrap/Card';
export const Footer = () => {
    return (
        <div className="footerPage">
          <div className='footer'>
      <Card className="text-center">
      <Card.Body className='footerr'>
        <section class="footerColor">
        <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4" style={{"margin-left":"3px"}}>
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
          <p><i class="fas fa-home me-3 text-secondary"></i> New York, US</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 class="text-uppercase fw-bold mb-4" style={{"margin-left":"60px"}}>
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
      <Card.Footer className="text-muted" class="cardFooter">
      <div class="text-center text-dark p-3">
    © 2023 Copyright:
    <a class="text-dark" href=""> ticktock@.com </a>
  </div>
      </Card.Footer>
    </Card>
    </div>
        </div>
    )
}