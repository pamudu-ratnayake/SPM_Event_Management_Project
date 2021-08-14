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
  Table,
  CardText,
  CardImg,
  CardTitle,
  Label,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Sponsorship_Documentation = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="6">
            <Card className="card-profile shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Event Information</h2>
                  </Col>
                </Row>
                <hr className="my-4" />
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Event Name
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Organization Name
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Event Start Date
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Days Event Occurs
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Event Time
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Event Location
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Contact Number
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Email
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
                <Card style={({ width: "28rem" }, { height: "2rem" })}>
                  <CardBody className="pt-1 pt-md-0">
                    <div>
                      <CardText>
                        <Row>
                          <Col xs="4">
                            <span className="h5" style={{ font: "menu" }}>
                              Item Description
                            </span>
                          </Col>
                          <Col xs="6">
                            <span className="h5">.col-6</span>
                          </Col>
                        </Row>
                      </CardText>
                    </div>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="6">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Publish An Event</h2>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Event Name</label>
                        <Row>
                          <Col>
                            <Input
                              id="exampleFormControlInput1"
                              placeholder="Enter Event Name"
                              type="text"
                            />
                          </Col>
                          <Col>
                            <Input
                              id="exampleFormControlInput1"
                              placeholder="Enter Event Name"
                              type="text"
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Event Name</label>
                        <Row xs="">
                          <Col xs="5">
                            <Input
                              id="exampleFormControlInput1"
                              placeholder="Enter Event Name"
                              type="text"
                            />
                          </Col>
                          <Col xs="5">
                            <Input
                              id="exampleFormControlInput1"
                              placeholder="Enter Event Name"
                              type="text"
                            />
                          </Col>
                          <Col lg={{ size: "auto" }} className="pt-2">
                          <Button className="btn-icon btn-3" color="primary" size="sm" type="button">
                            <span className="btn-inner--icon">
                            <i className="ni ni-fat-add" />
                          </span>
                          </Button>
                          </Col>
                        </Row>
                      </FormGroup>

                      <span>Packages</span>

                      <Row xs="">
                        <Col xs="">
                          <span className="h5" style={{ font: "menu" }}>
                            Item Description
                          </span>
                        </Col>
                        <Col xs="">
                          <span className="h5">.col-6</span>
                        </Col>
                        <Col lg={{ size: "auto" }} className="pt-2">
                          <Button className="btn-icon btn-3" color="primary" size="sm" type="button">
                            <span className="btn-inner--icon">
                            <i className="ni ni-fat-remove" />
                          </span>
                          </Button>
                        </Col>
                      </Row>

                      <Row xs="">
                        <Col xs="">
                          <span className="h5" style={{ font: "menu" }}>
                            Item Description
                          </span>
                        </Col>
                        <Col xs="">
                          <span className="h5">.col-6</span>
                        </Col>
                        <Col lg={{ size: "auto" }} className="pt-2">
                        <Button className="btn-icon btn-3" color="primary" size="sm" type="button">
                            <span className="btn-inner--icon">
                            <i className="ni ni-fat-remove" />
                          </span>
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Event Name</label>
                        <Row>
                          <Col>
                            <Input
                              id="exampleFormControlTextarea1"
                              placeholder="Write a large text here ..."
                              rows="3"
                              type="textarea"
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sponsorship_Documentation;
