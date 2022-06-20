import "./Header.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = ({ changeTheme }) => {
  return (
    <>
      <Navbar className="bg-info shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <p className="nav-brand h3 text-white ms-3">MooV Player</p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form className="h-100">
              <div className="d-flex align-items-center h-100 text-white">
                <p className="mb-0 me-2">light</p>
                <Form.Check type="switch" onClick={changeTheme} />
                <p className="mb-0">dark</p>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
