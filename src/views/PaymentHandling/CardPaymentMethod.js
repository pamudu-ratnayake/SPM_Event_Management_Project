import React, { useState } from "react";
import * as Yup from "yup";
import PaymentModal from "./PaymentModal";
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

  const RegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const validationSchema = Yup.object({
		card_name: Yup.string().required("*Required!"),
    card_number: Yup.string().matches(
      RegExp,
      "Credit Card Number is not Valid !"
    ).min(16, "Too short").max(16,"Too Long"),
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

              <PaymentModal
	// Use a unique value for the orderId
	orderId={45896588}
	name="Just For You Mom Ribbon Cake"
	amount="4500"
      />

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
                         Payment Information
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
                          
                            <CardBody>
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Name On Card</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{formik.values.card_name}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Card Number</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{formik.values.card_number}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Expire Date</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{formik.values.date_of_the_expire}</Col>
                </Row>
              </CardText>
 
              <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">CCV</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6">{formik.values.ccv}</Col>
                </Row>
              </CardText>
              <br></br>
                  <br></br>
                  <CardText className="h5" style={{ paddingTop: "0.5rem" }}>
                <Row>
                  <Col xs="4">Total Payment</Col>
                  <Col xs="1">:</Col>
                  <Col xs="6"></Col>
                </Row>
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
