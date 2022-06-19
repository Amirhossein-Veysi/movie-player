import "./InputBar.css";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
//function import
import isValidURL from "../../functions/isValidURL";
import isValidVideo from "../../functions/isValidVideo";

const InputBar = ({ setUrl }) => {
  const [uinp, setUinp] = useState("");
  const [error, setError] = useState("");

  //functions
  const handleInpChange = (e) => {
    setUinp(e.target.value);
  };

  const handleBtnClick = () => {
    if (!uinp) {
      setError("Please fill out the form below!");
      return;
    }
    if (!isValidURL(uinp)) {
      setError("The URL is not valid!");
      return;
    }
    if (!isValidVideo(uinp)) {
      setError("The url is not a valid video!");
      return;
    }

    setUrl(uinp);
    setError("");
  };

  return (
    <>
      <Row className="input-bar mt-5">
        <Col xs={12} lg={{ span: 8, offset: 2 }}>
          <Form>
            {error ? (
              <Form.Group>
                <Alert variant={"danger"}>{error}</Alert>
              </Form.Group>
            ) : (
              ""
            )}
            <Form.Group className="d-flex">
              <Form.Control
                className="unglow bg-light"
                size="lg"
                type="text"
                placeHolder="Enter the URL!"
                value={uinp}
                onChange={handleInpChange}
              />
              <Button
                variant="info"
                className="text-white py-2 px-4 unglow"
                onClick={handleBtnClick}
              >
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
