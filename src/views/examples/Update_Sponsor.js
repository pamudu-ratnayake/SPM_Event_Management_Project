// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Update_Sponsor = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4"></Col>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Add Sponsor</h2>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Sponsor ID</label>
                        <Input
                          id="exampleFormControlInput1"
                          disabled
                          placeholder="Sponsor ID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Company Name</label>
                        <Input placeholder="Event ID" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Event Type</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>Indoor</option>
                          <option>Outdoor</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input placeholder="Event ID" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Update
                    </Button>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Remove
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Update_Sponsor;
