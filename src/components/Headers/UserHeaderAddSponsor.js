// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "450px",
          backgroundImage:
            "url(" +
            require("../../assets/img/header/header.jpg").default +
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
            <Col lg="12" md="10">
              <h1 className="display-2 text-white">Add Sponsors</h1>
              <p className="text-white mt-0 mb-5">
                {/* This is Add Sponsor Page. You can add sponsors to Sponsor List  */}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
