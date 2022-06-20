import SadFace from "../../images/sad-svgrepo-com.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NoVideo = () => {
  return (
    <>
      <Row>
        <Col
          xs={12}
          lg={{ span: 8, offset: 2 }}
          className="d-flex justify-content-center flex-wrap mt-5"
        >
          <img className="w-25 mx-auto" src={SadFace} alt=":(" />
          <p className="h4 text-secondary text-center w-100 mt-3">
            No video to play!
          </p>
        </Col>
      </Row>
    </>
  );
};

export default NoVideo;
