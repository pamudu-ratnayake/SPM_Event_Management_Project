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
            require("../../assets/img/header/header5.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-3" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="10">
              <h1 className="display-2 text-white">Sponsor List</h1>
              <p className="text-white mt-0 mb-5">
                {/* This is your Sponsor List page. You can see the List of Sponsors and navigate to add, edit or remove Sponsors from the system */}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
