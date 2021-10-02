
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Slider from "components/Slider/Slider";

const CustomerIndexHeader = () => {
  return (
    <>
      <div className="header bg-gradient-primary pb-2 pt-3 pt-md-8 ">
        <Container fluid>

        <Row>
        <Col md="6" >
          <div className="mt--7" >
          <Slider  />
          </div>
        </Col>
        <Col md="6" >
          <div className="mt--7" >
          <Slider  />
          </div>
        </Col>
      </Row>



        </Container>
      </div>
    </>
  );
};

export default CustomerIndexHeader;
