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
            require("../../assets/img/header/header7.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-5" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="10">
              <h1 className="display-2 text-white">Event Consulting</h1>
              <p className="text-white mt-0 mb-5">
              {/* This is the page for Event Consulting. You may get expert advice for any concerns you have about arranging an event. As an event management specialist, you may share your knowledge by offering solutions. */}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
