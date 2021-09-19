// reactstrap components
import React, { useState,useEffect} from "react";
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
  Modal,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import * as Yup from "yup";
import ReactDatetime from "react-datetime";
// core components
import BoostHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/BoostHeader";

import { useFormik } from "formik";

const BoostEvent = (props) => {
  console.log("Id is: ", props.match.params._id);

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    boosting_Event:"",
    boosting_Purpose:""
  };

  const [notificationModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!notificationModal);
  }
  //Yup validations
  const validationSchema = Yup.object({
    boosting_Event: Yup.string().required("Required"),
    boosting_Purpose: Yup.string().required("Required"),
    
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
  });
  return (
    <>
      <BoostHeader />
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <h2 className="mb-0">Event Boosting Information</h2>
                  </Col>
                  <Col className="col text-right" xs="6">
                    <Button 
                   
                    color="primary" 
                    size="lm"
                    onClick={() => toggleModal("notificationModal")}>
                        What's Boosting
                      </Button>
                      </Col>
                      
                      <Modal
              className="modal-dialog-centered modal-primary"
              contentClassName="bg-gradient-primary"
              isOpen={notificationModal}
              toggle={() => toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Advertisement Boosting 
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => toggleModal("notificationModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text-center">
                  <i className="ni ni-bell-55 ni-3x" />
                  <h4 className="heading mt-4">You should read this!</h4>
                  <p>
                    A small river named Duden flows by their place and
                    supplies it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button">
                  Ok, Got it
                </Button>
                <Button
                  className="text-white ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => toggleModal("notificationModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col md="12" >
                      <FormGroup className = "text-center" >
                        <label>Select Boosting Package </label>
                        <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.boosting_Pack}
                          id="boosting_Pack"
                          name="boosting_Pack"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>1 day </option>
                          <option>3 day </option>
                          <option>5 day </option>
                          <option>10 day</option>
                          <option>20 day</option>
                          <option>30 day</option>
                        </Input>
                        {formik.touched.boosting_Pack &&
                        formik.errors.boosting_Pack ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.boosting_Pack}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    </Row>
                
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Organizer Email </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.email_SP}
                          id="Email_E"
                          name="email_E"
                          placeholder="Enter Your Email"
                          type="text"
                        />
                        {formik.touched.email_E &&
                         formik.errors.email_E ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.email_E}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number  </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.contact_Number_E}
                          id="Contact_Number_E"
                          name="contact_Number_E"
                          placeholder="Enter Your Contact Number"
                          type="text"
                        />
                        {formik.touched.contact_Number_E &&
                        formik.errors.contact_Number_E ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.contact_Number_E}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md="12">
                      <label>Boosting Purpose </label>
                      <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.advertisement_Des}
                        id="Boost_Purpose"
                        name="Boost_Purpose"
                        placeholder="Enter your Boost Description here ...................."
                        rows="6"
                        type="textarea"
                      />
                    </Col>
                  </Row>
                  <br></br>
                  
                  <Row>
                  <Col md="6">
                      <FormGroup>
                        <label>Date of The Event</label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                            {formik.touched.date_of_the_event && formik.errors.date_of_the_event ? <div style={{ color: "red" }}>{formik.errors.date_of_the_event}</div> : null}
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
                                  name: "date_of_the_event",
                                  value,
                                },
                              })
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.date_of_the_event}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                   
                    <Col md="6">
                      <FormGroup>
                        <label>Choose Boosting Package </label>
                       
                      <Button
                        className="ml-4"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Boosting Package Informations
                      </Button>
                   
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.service_Type}
                          id="service_Type"
                          name="service_Type"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>1 day</option>
                          <option>3 day</option>
                          <option>5 day</option>
                          <option>10 day</option>
                          <option>20 day</option>
                          <option>30 day</option>
                        </Input>
                        {formik.touched.service_Type &&
                        formik.errors.service_Type ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.service_Type}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    
                    
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lm"
                      >
                        Boost My Event
                      </Button>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
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
      </Container>
    </>
  );
};

export default BoostEvent;
