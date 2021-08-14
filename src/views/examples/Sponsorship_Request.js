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
  CardTitle,
  CardImg,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Sponsorship_Request = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Sponsors</h2>
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
                <Row>
                  <Col>
                    <div style={{ width: "18rem" }}>
                      <Col xl="14">
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardImg
                            alt="..."
                            src={require("../../assets/img/logo/logo.png").default}
                            top
                          />
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                  BOC
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  boc@gmail.com
                                </span>
                              </div>
                              {/* <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col> */}
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />
                                0767846213
                              </span>
                              {/* <Button
                                className="btn-icon btn-2"
                                color="default"
                                outline
                                type="button"
                                size="sm"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-email-83" />
                                </span>
                              </Button> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </div>
                  </Col>

                  <Col>
                    <div style={{ width: "18rem" }}>
                      <Col xl="14">
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardImg
                            alt="..."
                            src={require("../../assets/img/logo/logo.png").default}
                            top
                          />
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                  BOC
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  boc@gmail.com
                                </span>
                              </div>
                              {/* <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col> */}
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />
                                0767846213
                              </span>
                              {/* <Button
                                className="btn-icon btn-2"
                                color="default"
                                outline
                                type="button"
                                size="sm"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-email-83" />
                                </span>
                              </Button> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </div>
                  </Col>

                  <Col>
                    <div style={{ width: "18rem" }}>
                      <Col xl="14">
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardImg
                            alt="..."
                            src={require("../../assets/img/logo/logo.png").default}
                            top
                          />
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                  BOC
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  boc@gmail.com
                                </span>
                              </div>
                              {/* <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col> */}
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />
                                0767846213
                              </span>
                              {/* <Button
                                className="btn-icon btn-2"
                                color="default"
                                outline
                                type="button"
                                size="sm"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-email-83" />
                                </span>
                              </Button> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div style={{ width: "18rem" }}>
                      <Col xl="14">
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardImg
                            alt="..."
                            src={require("../../assets/img/logo/logo.png").default}
                            top
                          />
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                  BOC
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  boc@gmail.com
                                </span>
                              </div>
                              {/* <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col> */}
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />
                                0767846213
                              </span>
                              {/* <Button
                                className="btn-icon btn-2"
                                color="default"
                                outline
                                type="button"
                                size="sm"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-email-83" />
                                </span>
                              </Button> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </div>
                  </Col>

                  <Col>
                    <div style={{ width: "18rem" }}>
                      <Col xl="14">
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardImg
                            alt="..."
                            src={require("../../assets/img/logo/logo.png").default}
                            top
                          />
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                  BOC
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  boc@gmail.com
                                </span>
                              </div>
                              {/* <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col> */}
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />
                                0767846213
                              </span>
                              {/* <Button
                                className="btn-icon btn-2"
                                color="default"
                                outline
                                type="button"
                                size="sm"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-email-83" />
                                </span>
                              </Button> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </div>
                  </Col>

                  <Col>
                    <div style={{ width: "18rem" }}>
                      <Col xl="14">
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardImg
                            alt="..."
                            src={require("../../assets/img/logo/logo.png").default}
                            top
                          />
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle className="text-uppercase text-muted mb-0">
                                  BOC
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  boc@gmail.com
                                </span>
                              </div>
                              {/* <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-chart-bar" />
                                </div>
                              </Col> */}
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                              <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" />
                                0767846213
                              </span>
                              {/* <Button
                                className="btn-icon btn-2"
                                color="default"
                                outline
                                type="button"
                                size="sm"
                              >
                                <span className="btn-inner--icon">
                                  <i className="ni ni-email-83" />
                                </span>
                              </Button> */}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sponsorship_Request;
