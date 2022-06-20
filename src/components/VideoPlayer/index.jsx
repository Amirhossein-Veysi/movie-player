import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";

const VideoPlayer = ({ url }) => {
  return (
    <>
      <Row>
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="mt-5 mb-5">
          <Ratio aspectRatio="16x9">
            <video src={url} controls autoPlay className="rounded" />
          </Ratio>
        </Col>
      </Row>
    </>
  );
};

export default VideoPlayer;
