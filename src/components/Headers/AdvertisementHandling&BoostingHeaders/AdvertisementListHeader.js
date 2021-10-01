
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const AdvertisementListHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "450px",
          backgroundImage:
            "url(" +
            require("../../../assets/img/theme/yu.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-4" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="16">
              <h1 className="display-2 text-white">Advertisement List</h1>
              {/* <p className="text-white mt-0 mb-3">
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

export default AdvertisementListHeader;
