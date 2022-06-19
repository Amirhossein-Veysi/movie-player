import "./InputBar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const InputBar = () => {
  return (
    <>
      <Row className="input-bar mt-5">
        <Col xs={12} lg={{ span: 8, offset: 2 }}>
          <Form>
            <Form.Group className="d-flex">
              <Form.Control
                className="unglow bg-light"
                size="lg"
                type="text"
                placeHolder="Enter the URL!"
              />
              <Button variant="info" className="text-white py-2 px-4 unglow">
                Play
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default InputBar;
