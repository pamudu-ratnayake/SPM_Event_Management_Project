
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";


const BoostEventListHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "20px",
          backgroundImage:
            "url(" +
            require("../../../assets/img/theme/86.jpg").default +
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
              <h1 className="display-2 text-white">Boost Event List</h1>
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

export default BoostEventListHeader;
