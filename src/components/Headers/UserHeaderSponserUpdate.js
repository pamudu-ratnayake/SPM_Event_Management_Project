
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
            require("../../assets/img/header/header11.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center up",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-6" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="10" md="10">
              <h1 className="display-2 text-white">Update Sponsor</h1>
              <p className="text-white mt-0 mb-5">
                This is Update Sponsor page. You can see update Sponsor details
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
