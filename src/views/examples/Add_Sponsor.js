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
import UserHeaderAddSponsor from "components/Headers/UserHeaderAddSponsor.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  regNo: Yup.string().required("Required!"),
  companyName: Yup.string().required("Required!"),
  sponsorType: Yup.string().required("Required!"),
  SponsorPhoneNo: Yup.string()
    .matches(phoneRegExp, "Phone Number is not Valid!")
    .required("Required!")
    .min(10, "Too short")
    .max(10, "Too long"),
  sponsorEmail: Yup.string().email("Invalid Email!").required("Required!"),
});

const Add_Sponsor = () => {
  let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    regNo: "",
    companyName: "",
    sponsorType: "",
    SponsorPhoneNo: "",
    sponsorEmail: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);

    // values.id = ID;

    axios
      .post("http://localhost:8080/sponsor/addSponsors", values)
      .then((res) => {
        console.log(res);
        console.log('Data', values);
        
        // history.push({
        //   pathname:`/admin/SponsorList`
        // })
      })
      .catch((error) => {
        console.log(error);
      });


  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <UserHeaderAddSponsor />
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
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Company Registration Number</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Sponsor ID"
                          type="text"
                          name="regNo"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.regNo}
                        />
                        {formik.touched.regNo && formik.errors.regNo ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.regNo}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Company Name</label>
                        <Input
                          placeholder="Event ID"
                          type="text"
                          name="companyName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.companyName}
                        />
                        {formik.touched.companyName &&
                        formik.errors.companyName ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.companyName}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Sponsor Type</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Location"
                          type="select"
                          name="sponsorType"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.sponsorType}
                        >
                          <option>Choose...</option>
                          <option>Bank</option>
                          <option>Institute</option>
                          <option>Clothing & accessories</option>
                          <option>Mobile telecommunications</option>
                          <option>Electronics</option>
                          <option>Food products</option>
                          <option>Exploration & production</option>
                          <option>Health care providers</option>
                          <option>Hotels</option>
                          <option>Software</option>
                          <option>Personal products</option>
                          <option>Insurance</option>
                          <option>Engineering</option>
                          <option>Travel & tourism</option>
                          <option>Other</option>
                        </Input>
                        {formik.touched.sponsorType &&
                        formik.errors.sponsorType ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.sponsorType}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          placeholder="Event ID"
                          type="text"
                          name="SponsorPhoneNo"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.SponsorPhoneNo}
                        />
                        {formik.touched.SponsorPhoneNo &&
                        formik.errors.SponsorPhoneNo ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.SponsorPhoneNo}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          type="email"
                          name="sponsorEmail"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.sponsorEmail}
                        />
                        {formik.touched.sponsorEmail &&
                        formik.errors.sponsorEmail ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.sponsorEmail}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between">
                    <Button
                      id="POST"
                      type="submit"
                      color="primary"
                      size="sm"
                      name=""
                    >
                      Add
                    </Button>
                    {/* <Link to={"/admin/SponsorList"}> */}
                    <Button
                      color="primary"
                      size="sm"
                      name=""
                      type="reset"
                    >
                      Cancle
                    </Button>
                    {/* </Link> */}
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

export default Add_Sponsor;
