
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const AdvertisementHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "450px",
          backgroundImage:
            "url(" +
            require("../../../assets/img/theme/event71.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-5" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Publish Your Advertisement</h1>
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AdvertisementHeader;
