// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const CustomerProfileHeader = () => {
  return (
    <>
      <div
        className="header pb-3 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/profile-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="10">
              <h1 className="display-2 text-white">My Profile</h1>
              {/* <p className="text-white mt-0 mb-5">
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

export default CustomerProfileHeader;
