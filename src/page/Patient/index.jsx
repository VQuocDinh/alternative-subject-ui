import { Button, Col, Container, Row } from 'react-bootstrap';
import './index.scoped.scss';

const Patient = () => {
  return (
    <Container className="p-5">
      <Row className="nav align-items-center justify-content-between">
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="113"
            height="36"
            viewBox="0 0 113 36"
            fill="none"
          >
            <path
              d="M23.3745 11.1357C23.1428 10.9105 22.8178 10.8082 22.4997 10.8605C22.1811 10.9127 21.9058 11.1127 21.758 11.3998C21.2496 12.3875 20.6038 13.2952 19.844 14.0975C19.9198 13.5179 19.9579 12.9348 19.9579 12.3502C19.9579 11.2284 19.8076 10.074 19.5109 8.91863C18.5355 5.12375 15.9778 1.91449 12.4938 0.113763C12.1905 -0.0429603 11.829 -0.0374579 11.5306 0.128437C11.2322 0.2944 11.0367 0.598677 11.01 0.939027C10.7383 4.38763 8.96202 7.5251 6.13371 9.54901C6.09628 9.57596 6.05912 9.60327 6.02196 9.63045C5.94498 9.68676 5.87242 9.74002 5.80464 9.78473C5.79401 9.79181 5.7835 9.79901 5.77318 9.80641C3.99439 11.0799 2.52669 12.7776 1.5285 14.7164C0.514258 16.6885 0 18.8047 0 21.0061C0 22.1275 0.150336 23.282 0.446865 24.4375C2.01173 30.5283 7.49293 34.7822 13.7762 34.7822C21.372 34.7822 27.5515 28.6022 27.5515 21.0061C27.5515 17.2602 26.0681 13.7548 23.3745 11.1357Z"
              fill="#FFB525"
            />
            <path
              d="M13.2492 25.2953C15.5777 25.2953 17.4653 23.4078 17.4653 21.0793C17.4653 18.7509 15.5777 16.8633 13.2492 16.8633C10.9208 16.8633 9.0332 18.7509 9.0332 21.0793C9.0332 23.4078 10.9208 25.2953 13.2492 25.2953Z"
              fill="white"
            />
            <path
              d="M107.906 15.1607V12.5663H107.102V11.9922H109.356V12.5663H108.565V15.1607H107.906ZM109.682 15.1607V11.9922H110.32L111.507 13.5658H111.209L112.362 11.9922H112.999V15.1607H112.341V12.7195L112.604 12.779L111.384 14.3526H111.298L110.12 12.779L110.341 12.7195V15.1607H109.682Z"
              fill="#0069FD"
            />
            <path
              d="M44.1226 28.8252C45.1843 28.8252 46.1232 28.6313 46.94 28.2434C47.7564 27.8351 48.3791 27.2227 48.8077 26.4061V28.4577H53.0951V11.7383H48.5016V21.5066C48.5016 22.4661 48.2158 23.2418 47.6443 23.8339C47.0725 24.4055 46.3377 24.6913 45.4396 24.6913C44.5412 24.6913 43.8064 24.4055 43.2345 23.8339C42.663 23.2418 42.3773 22.4661 42.3773 21.5066V11.7383H37.7842V21.8741C37.7842 23.9564 38.3249 25.6406 39.407 26.9266C40.5095 28.1924 42.0812 28.8252 44.1226 28.8252Z"
              fill="#0069FD"
            />
            <path
              d="M56.4521 10.2378H61.0453V5.64453H56.4521V10.2378ZM56.4521 28.4577H61.0453V11.7382H56.4521V28.4577Z"
              fill="#0069FD"
            />
            <path
              d="M66.4278 28.458H71.0209V15.7194H74.6035V11.7385H71.0209V11.4936C71.0209 10.0033 71.8885 9.25815 73.6238 9.25815C73.9095 9.25815 74.2465 9.2888 74.6343 9.35004V5.43046C74.1649 5.32837 73.6238 5.27734 73.0111 5.27734C70.9288 5.27734 69.306 5.81834 68.1422 6.90028C66.9993 7.98227 66.4278 9.51336 66.4278 11.4936V11.7385H63.6104V15.7194H66.4278V28.458Z"
              fill="#0069FD"
            />
            <path
              d="M76.9658 28.4579H81.5593V19.4551C81.5593 18.2098 81.9063 17.2504 82.6003 16.5767C83.2946 15.8825 84.2031 15.5355 85.3256 15.5355H86.7648V11.5547H85.7851C84.7641 11.5547 83.8557 11.7486 83.0597 12.1365C82.2841 12.504 81.6818 13.2083 81.2532 14.2494V11.7384H76.9658V28.4579Z"
              fill="#0069FD"
            />
            <path
              d="M91.381 35.2558C94.443 35.2558 96.6581 33.5103 98.026 30.0195L105.191 11.7383H100.261L96.3111 22.4865L92.3607 11.7383H87.4307L94.0144 28.4577L93.7082 29.1621C93.4633 29.7133 93.1467 30.2032 92.7589 30.6319C92.3711 31.0606 91.728 31.275 90.8296 31.275C90.0948 31.275 89.4008 31.1729 88.7473 30.9687V34.7352C89.0947 34.9189 89.4925 35.0516 89.9419 35.1333C90.4114 35.2149 90.8912 35.2558 91.381 35.2558Z"
              fill="#0069FD"
            />
          </svg>
        </Col>

        <Col className="d-flex gap-5">
          <a href="http://localhost:3000/add-patient">Appointments</a>
          <a href="http://localhost:3000/add-patient">Prescriptions</a>
        </Col>

        <Col className="d-flex justify-content-end">
          <Button>Book now</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <h1 className="hero-title">Get ready for your best ever Dental Experience!</h1>
          <p className="hero-description">
            We use only the best quality materials on the market in order to provide the best
            products to our patients, So don't worry about anything and book yourself.
          </p>
          
          <div className="d-flex gap-3 mt-4">
            <Button variant="primary">Book Appointment</Button>
            <Button variant="outline-primary">Learn More</Button>
          </div>
        </Col>
        
        <Col md={6}>
          <img src="/dental-hero.png" alt="Dental Care" className="hero-image" />
        </Col>
      </Row>

      <Row className="services">
        <Col xs={12} className="text-center mb-5">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">We provide the best dental services</p>
        </Col>
        
        <Col md={4}>
          <div className="services-item d-flex flex-column align-items-center justify-content-center">
            <div className="service-icon mb-4">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#25B4F8" />
              </svg>
            </div>
            <h3 className="service-title">Root Canal Treatment</h3>
            <p className="service-description">Professional care for your root canal needs</p>
            <Button variant="link" className="mt-3">Learn More →</Button>
          </div>
        </Col>
        
        {/* Repeat for other service items */}
      </Row>

      <footer className="footer">
        <Container>
          <Row className="footer-content">
            <Col md={4}>
              <div className="footer-brand">
                {/* Use your logo SVG here */}
                <p className="mt-4">
                  Providing the best quality dental care with modern technology and experienced professionals.
                </p>
              </div>
            </Col>
            
            <Col md={2}>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Doctors</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </Col>

            <Col md={3}>
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#">Root Canal Treatment</a></li>
                <li><a href="#">Cosmetic Dentistry</a></li>
                <li><a href="#">Oral Surgery</a></li>
                <li><a href="#">Pediatric Dentistry</a></li>
              </ul>
            </Col>

            <Col md={3}>
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <i className="bi bi-geo-alt"></i>
                  123 Dental Street, City, Country
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  +1 234 567 890
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  info@dentalhospital.com
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="footer-bottom">
            <Col className="text-center">
              <hr className="footer-divider" />
              <p className="copyright">
                © {new Date().getFullYear()} Dental Hospital. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

export default Patient;
