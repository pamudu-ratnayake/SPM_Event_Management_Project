// Add_Sponsor

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
  Alert,
} from "reactstrap";
// core components
import UserHeaderAddSponsor from "components/Headers/UserHeaderAddSponsor.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import Requested_Sponsors from "./Requested_Sponsors";

const validationSchema = Yup.object({
  sender_name: Yup.string().required("Required!"),
  s_mail: Yup.string().required("Required!"),
  rqst: Yup.string().required("Required!"),
});

const Send_Request = (props) => {
  const [sDetails, setSponsor] = useState(0);
  let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    sender_name: "",
    _id: sDetails._id,
    sponsorEmail: sDetails.sponsorEmail,
    companyName: sDetails.companyName,
    rqst: "",
    cus_email: "",
    reqDate: "",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d7p8spa",
        "template_2hz5hnb",
        e.target,
        "user_fPD13QAVpGNDHZOSiKSLb"
      )
      .then((res) => {
        console.log(res);
        
        history.push({
          pathname: "/admin/Sponsorship_Request",
        });
        // {<Alert>Email Sent</Alert>}
        alert('Email Sent', 'dismissible');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(props.match.params._id);

    axios
      .get(`http://localhost:8080/sponsor/getSponsor/${props.match.params._id}`)
      .then((res) => {
        console.log(res);
        setSponsor(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues,
    // onSubmit,
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
                    <h2 className="mb-0">Send Sponsorship Request</h2>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={(formik.handleSubmit, sendEmail)}>
                <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Sponsor Name</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
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
                    <Col md="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
                          type="text"
                          name="sender_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.sender_name}
                        />
                        {formik.touched.sender_name &&
                        formik.errors.sender_name ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.sender_name}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Send To</label>
                        <Input
                          className="h5"
                          // placeholder="ABC (pvt).Ltd"
                          type="text"
                          name="sponsorEmail"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.values.sponsorEmail}
                          defaultValue={sDetails.sponsorEmail}
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

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Customer Email</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
                          type="text"
                          name="cus_email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.cus_email}
                        />
                        {formik.touched.cus_email &&
                        formik.errors.cus_email ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.cus_email}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Sponsorship Request</label>
                        <Input
                          className="h5-black"
                          id="exampleFormControlInput1"
                          placeholder="142, Palm Avenue, Colombo 10 "
                          rows="3"
                          type="textarea"
                          name="rqst"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.rqst}
                        />
                        {formik.touched.rqst && formik.errors.rqst ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.rqst}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-between">
                    <Col className="text-center">
                      <Button
                        id="POST"
                        type="submit"
                        color="primary"
                        size="sm"
                        name=""
                        // onSubmit= {sendEmail}
                      >
                        Send
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

export default Send_Request;