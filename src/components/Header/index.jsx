import "./Header.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const Header = ({ changeTheme }) => {
  return (
    <>
      <Row className="bg-info shadow-sm">
        <Col xs={10} className="p-2">
          <p className="nav-brand h3 text-white ms-3">MooV Player</p>
        </Col>
        <Col xs={2}>
          <Form className="h-100">
            <div className="d-flex align-items-center h-100 text-white">
              <p className="mb-0 me-2">light</p>
              <Form.Check type="switch" onClick={changeTheme} />
              <p className="mb-0">dark</p>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Header;
