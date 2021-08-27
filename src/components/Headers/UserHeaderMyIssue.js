// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "500px",
          backgroundImage:
            "url(" +
            require("../../assets/img/header/header12.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-yellow opacity-1" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="10">
              <h1 className="display-2 text-white">Take Help</h1>
              <p className="text-white mt-0 mb-5">
              {/* This is the Take Help Page. You can obtain answers to your questions about the event by adding issues to this page. */}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
