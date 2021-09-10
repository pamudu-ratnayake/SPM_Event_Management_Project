// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const ViewEventHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/event8.jpg").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-7" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="10">
              <h1 className="display-2 text-white">Event Details</h1>
              {/* <p className="text-white mt-0 mb-2">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ViewEventHeader;
