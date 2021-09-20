import React, { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import ReactDatetime from "react-datetime";

const CardPaymentMethod = () => {
  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }

  return (
    <>
      <Col lg="12" md="12">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h2 className="mb-0">Card Information</h2>
              </Col>
              <Col className="text-right" xs="4"></Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Card Type</label>
                    {/* <Input */}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="mb-6 ml-6 mt-3 ">
                    <FormGroup>
                      <div style={{ width: "1rem" }}>
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardBody>
                            <Row>
                              <Col className="col-auto">
                                <div className="card-profile-image">
                                  <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <img
                                      style={{width:250}, {height:120}}
                                      alt="..."
                                      src={
                                        require("../../assets/img/theme/master.png")
                                          .default
                                      }
                                    />
                                  </a>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </div>
                    </FormGroup>
                  </div>
                </Col>
                <Col>
                  <div className="mb-6 ml-6  mt-3">
                    <div style={{ width: "2rem" }}>
                      <Card className="card-stats mb-4 mb-lg-0">
                        <CardBody>
                          <Row>
                            <Col className="col-auto">
                              <div className="card-profile-image">
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <img
                                    style={{width:250}, {height:120}}
                                    alt="..."
                                    src={
                                      require("../../assets/img/theme/visa.png")
                                        .default
                                    }
                                  />
                                </a>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="mb-6 ml-6  mt-3">
                    <div style={{ width: "0.5rem" }}>
                      <Card className="card-stats mb-4 mb-lg-0">
                        <CardBody>
                          <Row>
                            <Col className="col-auto">
                              <div className="card-profile-image">
                                <a
                                  
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <img
                                    style={{width:250}, {height:120}}
                                    alt="..."
                                    src={
                                      require("../../assets/img/theme/amaricanExpress.png")
                                        .default
                                    }
                                  />
                                </a>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="mb-6 ml-6  mt-3">
                    <div style={{ width: "2rem" }}>
                      <Card className="card-stats mb-4 mb-lg-0">
                        <CardBody>
                          <Row>
                            <Col className="col-auto">
                              <div className="card-profile-image">
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <img
                                    style={{width:250}, {height:120}}
                                    alt="..."
                                    src={
                                      require("../../assets/img/theme/DinerClub.png")
                                        .default
                                    }
                                  />
                                </a>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className = "mt-5">
                <Col md="12" >
                  <FormGroup>
                    <label>Name On Card</label>
                    <Input
                      id="card_name"
                      name="card_name"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Card Number</label>
                    <Input
                      id="card_number"
                      name="card_number"
                      placeholder="Enter your card number"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <label>Expiray Date </label>
                    <InputGroup
                      className="input-group-alternative"
                      name="card_EXdate"
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Date Picker Here",
                        }}
                        timeFormat={false}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label>CCV</label>
                    <Input
                      id="ccv"
                      name="ccv"
                      placeholder="Enter your ccv"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    block
                    className="mb-3"
                    color="primary"
                    type="button"
                    onClick={() => toggleModal("defaultModal")}
                  >
                    View Payment details
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="mr-8 ml-2"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lm"
                  >
                    Cancle
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default CardPaymentMethod;
