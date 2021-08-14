
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const ServiceProviderHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../../assets/img/theme/cover_service_provider.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-6" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col >
              <h1 className="display-2 text-white">Malith Madusankha</h1>
              <div class="d-flex flex-row text-white fs-4">
                <div class="px-2 bd-highlight"><i class='bx bxl-facebook-square' ></i></div>
                <div class="px-2 bd-highlight"><i class='bx bxl-instagram-alt' ></i></div>
                <div class="px-2 bd-highlight"><i class='bx bxl-linkedin' ></i></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ServiceProviderHeader;
