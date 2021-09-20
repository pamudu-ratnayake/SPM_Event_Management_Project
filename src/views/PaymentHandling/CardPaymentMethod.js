import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  CardText,
  Input,
  CardTitle,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Modal,
  CardImg,
  Col,
} from "reactstrap";

import ReactDatetime from "react-datetime";
import { useFormik } from "formik";

const CardPaymentMethod = () => {
  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    card_name:"",
    card_number:"",
    date_of_the_expire:"",
    ccv:"",
  };

  const onSubmit = (values) => {
    console.log("Form Date", values);
    //  values.date_of_the_event = event_date; //watch
    axios
      .post("http://localhost:8080/eventAdd/addevent", values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        // history.push({
        //   pathname: `/admin/my-event`,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

	const validationSchema = Yup.object({
		card_name: Yup.string().required("*Required!"),
		card_number: Yup.string().required("*Required!"),
		date_of_the_expire: Yup.string().required("*Required!"),
		ccv: Yup.string().required("*Required!"),
		
	});

  const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});



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
            <Form onSubmit={formik.handleSubmit}>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.card_name}
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.card_number}
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
                        <label>Expire Date</label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                            {formik.touched.date_of_the_expire && formik.errors.date_of_the_expire ? <div style={{ color: "red" }}>{formik.errors.date_of_the_expire}</div> : null}
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "MM/DD/YY",
                            }}
                            dateFormat="DD/MM/YYYY"
                            timeFormat={false}
                            onChange={(value) =>
                              formik.handleChange({
                                target: {
                                  name: "date_of_the_expire",
                                  value,
                                },
                              })
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.date_of_the_expire}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                <Col md="6">
                  <FormGroup>
                    <label>CCV</label>
                    <Input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.ccv}
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
                <Modal
                      className="modal-dialog-centered"
                      isOpen={defaultModal}
                      toggle={() => toggleModal("defaultModal")}
                    >
                      <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-default">
                          Advertisement Preview
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
                        <Card
                          className="bg-secondary shadow"
                          style={{ width: "28rem" }}
                        >
                          <Card style={{ width: "28rem" }}>
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/ui.jpg").default}
                              top
                            />
                            <CardBody>
                              <CardTitle>{formik.values.advertisement_title}</CardTitle>
                              <CardText>
                              {formik.values.advertisement_Des}
                              </CardText>
                            </CardBody>
                          </Card>
                        </Card>
                      </div>
                      <div className="modal-footer">
                        <Button
                          color="primary"
                          type="submit"
                          onClick={() => {onSubmit(formik.values)}}
                        >
                          Confirm Your Request
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
    </>
  );
};

export default CardPaymentMethod;
