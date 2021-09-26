import React, { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  CardTitle,
  CardText,
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
import ReactDatetime from "react-datetime";
// core components
import CardPaymentHeader from "components/Headers/CardPaymentHeader";

const CardPayment = () => {
  const [defaultModal, setmodalDemo] = useState(false);

  //toggle modal
  function toggleModal() {
    setmodalDemo(!defaultModal);
  }

  return (
    <>
      <CardPaymentHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Card Information</h2>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Card Type</label>
                      {/* <Input */}
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Row>
                    <Col>
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
                    </Col>
                    <Col>
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
                    </Col>
                    <Col>
                      <div style={{ width: "2rem" }}>
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardBody>
                            <Row>
                              <Col className="col-auto">
                                <div className="card-profile-image" size="2rem">
                                  <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <img
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
                    </Col>
                    <Col>
                      <div style={{ width: "2rem" }}>
                        <Card className="card-stats mb-4 mb-lg-0">
                          <CardBody>
                            <Row>
                              <Col className="col-auto">
                                <div className="card-profile-image" size="2rem">
                                  <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <img
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
                    </Col>
                  </Row>
                </FormGroup>
                <Form>
                  <Row>
                    <Col md="12">
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
          </Col>
        </Row>
        <Col md="4">
          <Modal
            className="modal-dialog-centered"
            isOpen={defaultModal}
            toggle={() => toggleModal("defaultModal")}
          >
            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-default">
                Payment Details Confirmation
              </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal("defaultModal")}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <Card className="bg-secondary shadow" style={{ width: "28rem" }}>
                <CardBody>
                  <CardTitle>Payment Information</CardTitle>
                  <CardText>
                    <Row>
                      <label>Card Name :</label>
                    </Row>
                    <Row>
                      <label>Card Number :</label>
                    </Row>
                    <Row>
                      <label>Expiray Date :</label>
                    </Row>
                    <Row>
                      <label>CCV :</label>
                    </Row>
                  </CardText>
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Edit details
                  </Button>
                </CardBody>
              </Card>
            </div>
            <div className="modal-footer">
              <Button color="primary" type="button">
                Confirm Payment
              </Button>
              <Button
                className="ml-auto"
                color="link"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal("defaultModal")}
              >
                Close
              </Button>
            </div>
          </Modal>
        </Col>
      </Container>
    </>
  );
};

export default CardPayment;
