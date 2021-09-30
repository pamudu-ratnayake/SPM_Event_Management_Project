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
  sponsorEmail: Yup.string().required("Required!"),
  cus_email: Yup.string().required("Required!").email("Invalid Email"),
  rqst: Yup.string().required("Required!"),
  companyName: Yup.string().required("Required!"),
});

const Send_Request = (props) => {
  const [sDetails, setSponsor] = useState(0);
  let history = useHistory();

  // const today = new Date();
  // const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + today.getTime();

  const user = JSON.parse(localStorage.getItem("profile"));
  const userName = user?.result?.firstName + " " + user?.result?.lastName;

  console.log(userName);
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    event_id: "",
    sender_name: "",
    _id: sDetails._id,
    sponsorEmail: sDetails.sponsorEmail,
    companyName: sDetails.companyName,
    cus_email: "",
    rqst: "",
    reqDate: "", //today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + today.getTime(),
  };

  const sendEmail = (e, values) => {
    console.log("kkkk", values);
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
        // axios
        // .post("http://localhost:8080/requestedSponsor/addRequestedSponsors", values)
        // .then((res) => {
        //   console.log(res);
        //   console.log("Data", values);
        // })
        // .catch((error) => {
        //   console.log(error);
        // });

        alert("Email Sent");
      })
      .catch((err) => console.log(err));

    // dataPost(values);
  };

  const dataPost = (values) => {
    console.log("Dataaaa", values);
    axios
      .post(
        "http://localhost:8080/requestedSponsor/addRequestedSponsors",
        values
      )
      .then((res) => {
        console.log(res);
        console.log("Data", values);
      })
      .catch((error) => {
        console.log(error);
      });
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
    // sendEmail,
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
                          // disabled
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={sDetails.companyName}
                        />
                        {formik.touched.companyName &&
                        formik.errors.companyName ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.companyName}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Event Organizer Name</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          // placeholder="reg000123456"
                          type="text"
                          name="sender_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={userName}
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
                          // disabled
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
                    <Col md="6">
                      <FormGroup>
                        <label>Send From</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
                          type="text"
                          name="cus_email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={user?.result?.email}
                        />
                        {formik.touched.cus_email && formik.errors.cus_email ? (
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
                          // placeholder="142, Palm Avenue, Colombo 10 "
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
                      <Button type="submit" color="primary" size="sm">
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
