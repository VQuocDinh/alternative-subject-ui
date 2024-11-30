import { Row, Col, Button } from 'react-bootstrap';
import LogoIcon from '../../../assets/icons/logo';
import { Link, useNavigate } from 'react-router-dom';
import { PATH_HOME } from '../../routes/path';
import './index.scoped.scss';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Row className="nav align-items-center justify-content-between h-0">
      <Col>
        <Row>
          <Col className="d-flex">
            <LogoIcon />
          </Col>
          <Col className="d-flex gap-5 align-items-center">
            <Link to={PATH_HOME.prescription.root}>Prescriptions</Link>
            <Link to={PATH_HOME.prescription}>Appointment</Link>
          </Col>
        </Row>
      </Col>

      <Col className="d-flex justify-content-end gap-3">
        <Button>Book now</Button>
        <Button
          variant="outline-secondary"
          onClick={() => {
            navigate('/auth/login');
          }}
        >
          Log in
        </Button>
      </Col>
    </Row>
  );
};

export default Navbar;
