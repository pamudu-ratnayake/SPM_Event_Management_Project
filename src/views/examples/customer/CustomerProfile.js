import { useFormik } from "formik";
import React, { useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, Modal } from "reactstrap";
// core components
import CustomerProfileHeader from "components/Headers/CustomerProfileHeader.js";

const CustomerProfile = () => {
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "90px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#bab8b8",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  const activeStyle = {
    borderColor: "#2196f3",
  };
  const acceptStyle = {
    borderColor: "#00e676",
  };
  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone();

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    cus_userName: "",
    //user_id: "",
    cus_FName: "",
    cus_LName: "",
    cus_email: "",
    cus_contact_no: "",
    cus_address: "",
    cus_nic: "",
    cus_description: "",
  };

  const onSubmit = (values) => {
    console.log("Form Date", values);
    //  values.date_of_the_event = event_date; //watch
    let formdata = new FormData();
    formdata.append("cus_userName", values.cus_userName);
    formdata.append("cus_FName", values.cus_Fname);
    formdata.append("cus_LName", values.cus_Lname);
    formdata.append("cus_email", values.cus_email);
    formdata.append("cus_contact_no", values.cus_contact_no);
    formdata.append("cus_address", values.cus_address);
    formdata.append("cus_description", values.cus_description);
    formdata.append("cus_nic", values.cus_nic);
    formdata.append("file", acceptedFiles[0]);

    // console.log("data",formdata);

    axios
      .post("http://localhost:8080/customerdetails/addcustomer", formdata)
      .then((res) => {
        console.log(res);
        console.log("Data", formdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //use formik here
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const [defaultModal, setmodalDemo] = useState(false);

  //toggle function here
  function toggleModal() {
    setmodalDemo(!defaultModal);
  }

  return (
    <>
      <CustomerProfileHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." className="rounded-circle" src={require("../../../assets/img/theme/team-4-800x800.jpg").default} />
                    </a>
                  </div>
                </Col>
              </Row>

              <CardBody className="pt-0 pt-md-4 mt-8">
                <div className="text-center">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Kottawa, Colombo.
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Software Engineer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Pearson Lanka
                  </div>
                  <hr className="my-4" />
                  <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My Account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button color="primary" href="#pablo" size="sm" type="button" onClick={() => toggleModal("defaultModal")}>
                      Edit Profile
                    </Button>
                    <Modal className="modal-dialog-centered" isOpen={defaultModal} toggle={() => toggleModal("defaultModal")}>
                      <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-default">
                          Type your modal title
                        </h6>
                        <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => toggleModal("defaultModal")}>
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Are you sure?</p>
                      </div>
                      <div className="modal-footer">
                        <Button color="primary" type="button">
                          Save changes
                        </Button>
                        <Button className="ml-auto" color="link" data-dismiss="modal" type="button" onClick={() => toggleModal("defaultModal")}>
                          Close
                        </Button>
                      </div>
                    </Modal>

                    {/* <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                      Edit Profile
                    </Button> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit} encType="multipart/form-data" >
                  <h6 className="heading-small text-muted mb-4">User information</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="customername">
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="customername"
                            placeholder="Username"
                            type="text"
                            name="cus_userName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cus_userName}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="customerEmail">
                            Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="customerEmail"
                            placeholder="Email"
                            type="text"
                            name="cus_email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cus_email}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="customerFirstName">
                            First Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="customerFirstName"
                            placeholder="First Name"
                            type="text"
                            name="cus_FName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cus_Fname}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="customerLastName">
                            Last Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="customerLastName"
                            placeholder="Last Name"
                            type="text"
                            name="cus_LName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cus_Lname}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="customerConNo">
                            Contact Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="customerConNo"
                            placeholder="Contact Number"
                            type="text"
                            name="cus_contact_no"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cus_contact_no}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="customerNic">
                            NIC Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="customerNic"
                            placeholder="NIC Number"
                            type="text"
                            name="cus_nic"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cus_nic}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <label className="form-control-label" htmlFor="customerGender">
                      Gender
                    </label>
                    <div className="ml-5">
                      <div className="custom-control custom-radio mb-3">
                        <input className="custom-control-input" id="customRadio5" name="custom-radio-2" type="radio" />
                        <label className="custom-control-label" htmlFor="customRadio5">
                          Male
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input className="custom-control-input" defaultChecked id="customRadio6" name="custom-radio-2" type="radio" />
                        <label className="custom-control-label" htmlFor="customRadio6">
                          Female
                        </label>
                      </div>
                    </div>
                    {/* </div> */}
                    {/* <hr className="my-4" /> */}
                    {/* Address */}
                    {/* <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6> */}
                    {/* <div className="pl-lg-4"> */}
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="customerAddress">
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mi"
                            id="customerAddress"
                            placeholder="Home Address"
                            type="text"
                            name="cus_address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cus_address}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop your image file here, or click to select files</p>
                  </div>

                  <h4>File Details</h4>
                  <ul>{files}</ul>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                        name="cus_description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cus_description}
                      />
                    </FormGroup>
                  </div>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                      Add My Details
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

export default CustomerProfile;
