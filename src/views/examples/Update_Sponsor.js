// Update_Sponsor

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
import UserHeaderSponsorUpdate from "components/Headers/UserHeaderSponserUpdate.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  regNo: Yup.string().required("Required!"),
  companyName: Yup.string().required("Required!"),
  sponsorType: Yup.string().required("Required!"),
  SponsorPhoneNo: Yup.string().matches(phoneRegExp, "Phone Number is not Valid!").required("Required!").min(10,"Too short").max(10, "Too long"),
  sponsorEmail: Yup.string().email("Invalid Email!").required("Required!"),
  sponsorAddress: Yup.string().required()
});

const Update_Sponsor = (props) => {

  console.log('ID is', props.match.params._id )

  const [details, setCustomerRequest] = useState(0);
  let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    _id: details._id,
    regNo: details.regNo,
    companyName: details.companyName,
    sponsorType: details.sponsorType,
    SponsorPhoneNo: details.SponsorPhoneNo,
    sponsorEmail: details.sponsorEmail,
    sponsorAddress: details.sponsorAddress
  };

  const onSubmit = values =>{
    console.log('form data',values)
    axios.put(`http://localhost:8080/sponsor/updateSponsor/${props.match.params._id}`,values)
        .then(res => {
          console.log(res)
          history.push({
            pathname: '/admin/SponsorList/${values._id}'
          })
        })
        .catch(error => {
          console.log(error)
        })
  }
  useEffect(()=>{

    axios.get(`http://localhost:8080/sponsor/getSponsor/${props.match.params._id}`)
        .then(res => {
          console.log(res);
          setCustomerRequest(res.data)
        }).catch((error) => {
          console.log(error)
        })
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    validateOnMount: true,
    initialValues,
    onSubmit,
    validationSchema
  });
  return (
    <>
      <UserHeaderSponsorUpdate />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4"></Col>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Update Sponsor Details</h2>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Sponsor ID</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Sponsor ID"
                          type="text"
                          name="_id"
                          disabled
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.values.regNo}
                          defaultValue={details._id}
                        />
                        {formik.touched._id && 
                        formik.errors._id ?(
                        <div style={{color:"red"}}>
                        {formik.errors._id}</div>) 
                        : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Compay Registration Number</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Sponsor ID"
                          type="text"
                          name="regNo"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.values.regNo}
                          defaultValue={details.regNo}
                        />
                        {formik.touched.regNo && 
                        formik.errors.regNo ?(
                        <div style={{color:"red"}}>
                        {formik.errors.regNo}</div>) 
                        : null}
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Company Name</label>
                        <Input
                          placeholder="Event ID"
                          type="text"
                          name="companyName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.values.companyName}
                          defaultValue={details.companyName}
                        />
                        {formik.touched.companyName && 
                        formik.errors.companyName ?(
                        <div style={{color:"red"}}>
                        {formik.errors.companyName}</div>) 
                        : null}
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
                          // value={formik.values.sponsorType}
                          defaultValue={details.sponsorType}
                        >
                          <option> {details.sponsorType} </option>
                          <option>Bank</option>
                          <option>Institute</option>
                          <option>Clothing & accessories</option>
                          <option>Telecommunications</option>
                          <option>Electronics</option>
                          <option>Food products</option>
                          <option>Exploration & production</option>
                          <option>Health care</option>
                          <option>Hotels</option>
                          <option>Software</option>
                          <option>Personal products</option>
                          <option>Insurance</option>
                          <option>Engineering</option>
                          <option>Travel & tourism</option>
                          <option>Consumer goods, retail</option>
                          <option>Insurance</option>
                          <option>Other</option>
                        </Input>
                        {formik.touched.sponsorType && 
                        formik.errors.sponsorType ?(
                        <div style={{color:"red"}}>
                        {formik.errors.sponsorType}</div>) 
                        : null}
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
                          // value={formik.values.SponsorPhoneNo}
                          defaultValue={details.SponsorPhoneNo}
                        />
                        {formik.touched.SponsorPhoneNo && 
                        formik.errors.SponsorPhoneNo ?(
                        <div style={{color:"red"}}>
                        {formik.errors.SponsorPhoneNo}</div>) 
                        : null}
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
                          // value={formik.values.sponsorEmail}
                          defaultValue={details.sponsorEmail}
                        />
                        {formik.touched.sponsorEmail && 
                        formik.errors.sponsorEmail ?(
                        <div style={{color:"red"}}>
                        {formik.errors.sponsorEmail}</div>) 
                        : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                  <FormGroup>
                        <label>Address</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="142, Palm Avenue, Colombo 10 "
                          type="text"
                          name="sponsorAddress"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.sponsorAddress}
                        />
                        {formik.touched.sponsorAddress &&
                        formik.errors.sponsorAddress ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.sponsorAddress}
                          </div>
                        ) : null}
                      </FormGroup>
                      </Col>
                  </Row>
                  <div className="d-flex justify-content-between">
                    
                    <Button
                      color="primary"
                      size="sm"
                      type="submit"
                      // href="/admin/SponsorList"
                    >
                      Update
                    </Button>
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

export default Update_Sponsor;
