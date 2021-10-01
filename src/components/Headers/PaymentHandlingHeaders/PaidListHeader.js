// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const PaidListHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "450px",
          backgroundImage:
            "url(" + require("../../../assets/img/theme/ok.jpg").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-5" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="16">
              <h1 className="display-2 text-white">Make Your Payment</h1>
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PaidListHeader;
