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
import UserHeaderSpnDocumentation from "components/Headers/UserHeaderSpnDocumentation.js";

const Sponsorship_Documentation = () => {
  return (
    <>
      <UserHeaderSpnDocumentation />
      {/* Page content */}
      <Container className="mt--4" fluid>
        
          <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
            {/* <Col> */}
            <Row>
              <Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h2 className="mb-0">Event Information</h2>
                      </Col>
                    </Row>
                    {/* <hr className="my-4" /> */}
                  </CardHeader>
                  <CardBody>
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
                                <span className="h5" style={{ font: "menu" }}>
                                  Location
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
                                <span className="h5" style={{ font: "menu" }}>
                                  Days Occurs
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
                                <span className="h5" style={{ font: "menu" }}>
                                  Event Type
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
                                <span className="h5" style={{ font: "menu" }}>
                                  Organizer Name
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
                                <span className="h5" style={{ font: "menu" }}>
                                  Organizer Email
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
                                <span className="h5" style={{ font: "menu" }}>
                                  Organizer Contact Number
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
                    <Card style={({ width: "28rem" }, { height: "2.5rem" })}>
                      <CardBody className="pt-1 pt-md-0">
                        <div>
                          <CardText>
                            <Row>
                              <Col xs="5">
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
                        <h2 className="mb-0">Additional Information</h2>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label>Organization Contact Information</label>
                            <Row>
                              <Col>
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Email"
                                  type="text"
                                />
                              </Col>
                              <Col>
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Contact Number"
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
                            <label>Add Sponsorship Criteria</label>
                            <Row xs="">
                              <Col xs="5">
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Package Name"
                                  type="text"
                                />
                              </Col>
                              <Col xs="5">
                                <Input
                                  id="exampleFormControlInput1"
                                  placeholder="Amount"
                                  type="text"
                                />
                              </Col>
                              <Col lg={{ size: "auto" }} className="pt-2">
                                <Button
                                  className="btn-icon btn-3"
                                  color="default"
                                  size="sm"
                                  type="button"
                                >
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
                              <Button
                                className="btn-icon btn-2"
                                color="default"
                                size="sm"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-fat-remove" />
                                </span>
                              </Button>
                            </Col>
                          </Row>
                          <Row xs="">
                            <Col xs="">
                              <span className="h5" style={{ font: "menu" }}>
                                Event Description
                              </span>
                            </Col>
                            <Col xs="">
                              <span className="h5">.col-6</span>
                            </Col>
                            <Col lg={{ size: "auto" }} className="pt-2">
                              <Button
                                className="btn-icon btn-2"
                                color="default"
                                size="sm"
                                type="button"
                              >
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
                      <div>
                        <Button color="default" size="sm" type="button">
                          Creat Document
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </CardBody>
          </Card>
      </Container>
    </>
  );
};

export default Sponsorship_Documentation;
