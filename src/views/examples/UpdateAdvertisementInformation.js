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
} from "reactstrap";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

// core components
import AdvertisementHeader from "components/Headers/AdvertisementHeader";

import { useFormik } from "formik";

//phone number type
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const UpdateAdvertisementInformation = (props) => {
  console.log("ID is", props.match.params._id);

  const [details, setupdateRequest] = useState(0);
  let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    service_Provider_Name: details.service_Provider_Name,
    // service_Provider_ID: "",
    contact_Number_SP: details.contact_Number_SP,
    email_SP: details.email_SP,
    service_Type: details.service_Type,
    advertisement_Duration: details.advertisement_Duration,
    advertisement_Des: details.advertisement_Des,
    advertisement_Pic: details.advertisement_Pic,
  };

  const validationSchema = Yup.object({
    service_Provider_Name: Yup.string().required("Required !"),
    contact_Number_SP: Yup.string().matches(
      phoneRegExp,
      "Phone Number is not Valid !"
    ),
    email_SP: Yup.string().email("Invalid Email!").required("Required !"),
    service_Type: Yup.string().required("Required !"),
    advertisement_Duration: Yup.string().required("Required !"),
    advertisement_Des: Yup.string().required("Required !"),
    advertisement_Pic: Yup.string().required("Required !"),
    // cardtype: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("form data", values);
    axios
      .put(
        `http://localhost:8080/advertisement/updateadvertisement/${props.match.params._id}`, values)
      .then((res) => {
        console.log(res);
        history.push({
          pathname: `/admin`,
        });
        // history.pushState({
        //   pathname: ''
        // })
      })
      .catch((error) => {
        console(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/advertisement/get/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setupdateRequest(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <AdvertisementHeader />
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Advertisement Information</h2>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Service Provider Name </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.values.service_Provider_Name}
                          defaultValue={details.service_Provider_Name}
                          id="Service_Provider_Name "
                          name="service_Provider_Name"
                          placeholder="Enter Your Name"
                          type="text"
                        />
                        {formik.touched.service_Provider_Name &&
                        formik.errors.service_Provider_Name ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.service_Provider_Name}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Customer Email </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.email_SP}
                          defaultValue={details.email_SP}
                          id="Email_SP"
                          name="email_SP"
                          placeholder="Enter Email"
                          type="text"
                        />
                        {formik.touched.email_SP && formik.errors.email_SP ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.email_SP}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.values.contact_Number_SP}
                          defaultValue={details.contact_Number_SP}
                          id="Contact_Number_SP"
                          name="contact_Number_SP"
                          placeholder="Enter Contact Number"
                          type="text"
                        />
                        {formik.touched.contact_Number_SP &&
                        formik.errors.contact_Number_SP ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.contact_Number_SP}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Service Type </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.service_Type}
                          defaultValue={details.service_Type}
                          id="Service_Type"
                          name="service_Type"
                          type="select"
                        >
                          <option>{details.service_Type}</option>
                          <option>Photographer</option>
                          <option>Decorater</option>
                          <option>Cake Designer</option>
                          <option>Event Planner</option>
                          <option>Sound Provider</option>
                          <option>florist</option>
                        </Input>
                        {formik.touched.service_Type &&
                        formik.errors.service_Type ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.service_Type}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Advertisement Available Duration </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.advertisement_Duration}
                          defaultValue={details.advertisement_Duration}
                          id="Advertisement_Duration"
                          name="advertisement_Duration"
                          type="select"
                        >
                          <option>{details.advertisement_Duration}</option>
                          <option>1 Day</option>
                          <option>3 Day</option>
                          <option>5 Day</option>
                          <option>10 Day</option>
                          <option>15 Day</option>
                          <option>20 Day</option>
                          <option>1 month</option>
                          <option>2 month</option>
                          <option>3 month</option>
                        </Input>
                        {formik.touched.advertisement_Duration &&
                        formik.errors.advertisement_Duration ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.advertisement_Duration}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <label>Advertisement Description </label>
                      <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // value={formik.advertisement_Des}
                        defaultValue={details.advertisement_Des}
                        id="Advertisement_Des"
                        name="advertisement_Des"
                        placeholder="Enter your Advertisement Description here ...................."
                        rows="6"
                        type="textarea"
                      />
                      {formik.touched.advertisement_Des &&
                      formik.errors.advertisement_Des ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.advertisement_Des}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col md="12">
                      <label>Upload Advertisement Picture </label>
                      <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        //
                        defaultValue={details.advertisement_Pic}
                        id="Advertisement_Pic"
                        name="advertisement_Pic"
                        placeholder="Enter your Advertisement Picture here ..................."
                        rows="6"
                        type="textarea"
                      />
                      {formik.touched.advertisement_Pic &&
                      formik.errors.advertisement_Pic ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.advertisement_Pic}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col ml="12">
                      <label className="mb-2 mt-3">Payment Type </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="custom-control custom-radio mb-3 ml-5">
                        <input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.cardtype}
                          defaultValue={details.cardtype}
                          className="custom-control-input"
                          id="cardtype"
                          name="cardtype"
                          type="radio"
                        />
                        {/* {formik.touched.cardtype && formik.errors.cardtype ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.cardtype}
                          </div>
                        ) : null} */}
                        <label
                          className="custom-control-label"
                          htmlFor="customRadio5"
                        >
                          Card Payment
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          defaultChecked
                          id="onlinetransfering"
                          name="onlinetransfering"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadio6"
                        >
                          Online Transfering
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        type="submit"
                        //  onClick={(e) => e.preventDefault()}
                        size="lm"
                      >
                        Request Advertisement
                      </Button>
                    </Col>
                    <Col className="text-right" xs="4">
                      {/* <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lm"
                      >
                        Cancle
                      </Button> */}
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

export default UpdateAdvertisementInformation;
