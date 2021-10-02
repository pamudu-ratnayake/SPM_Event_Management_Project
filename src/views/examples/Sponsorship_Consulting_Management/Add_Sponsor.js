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
} from "reactstrap";
// core components
import UserHeaderAddSponsor from "components/Headers/UserHeaderAddSponsor.js";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {useDropzone} from 'react-dropzone';
import { useMemo } from 'react';
import API from "variables/tokenURL";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//Validation
const validationSchema = Yup.object({
  // regNo: Yup.string().required("Required!"),
  companyName: Yup.string().required("Required!"),
  sponsorType: Yup.string().required("Required!"),
  SponsorPhoneNo: Yup.string()
    .matches(phoneRegExp, "Phone Number is not Valid!")
    .required("Required!")
    .min(10, "Too short")
    .max(10, "Too long"),
  sponsorEmail: Yup.string().email("Invalid Email!").required("Required!"),
  sponsorAddress: Yup.string().required("Required"),
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
    sponsorAddress: "",
    logo: "",
  };

  
  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '90px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#A9A9B0',
    borderStyle: 'dashed',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    color: 'default',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  const activeStyle = {
    borderColor: '#2196f3'
  };
  const acceptStyle = {
    borderColor: '#00e676'
  };
  const rejectStyle = {
    borderColor: '#ff1744'
  };

  const {acceptedFiles, getRootProps, getInputProps, isDragActive,
    isDragAccept,
    isDragReject} = useDropzone()

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);


  const files = acceptedFiles.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
  ));
  const onSubmit = (values) => {
    console.log("form data", values);
    console.log('files', acceptedFiles);

    let formdata = new FormData();
    formdata.append("regNo", values.regNo);
    formdata.append("companyName", values.companyName);
    formdata.append("sponsorType", values.sponsorType);
    formdata.append("SponsorPhoneNo", values.SponsorPhoneNo);
    formdata.append("sponsorEmail", values.sponsorEmail);
    formdata.append("sponsorAddress", values.sponsorAddress);
    formdata.append("file", acceptedFiles[0]);

    API
      .post("/sponsor/addSponsors", formdata)
      .then((res) => {
        console.log(res);
        console.log("Data", formdata);

        // history.push({
        //   pathname:`/admin/SponsorList`
        // })
      })
      .catch((error) => {
        console.log(error);
      });

      alert("Successfully Added");
    window.location.reload(false);
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
                    <h2 className="mb-0">Add Sponsors</h2>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label><h4>Company Registration Number</h4></label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
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
                        <label><h4>Company Name</h4></label>
                        <Input
                          className="h5"
                          placeholder="ABC (pvt).Ltd"
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
                        <label><h4>Sponsor Type</h4></label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
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
                        <label><h4>Phone Number</h4></label>
                        <Input
                          className="h5"
                          placeholder="+94768945678"
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
                        <label><h4>Email</h4></label>
                        <Input
                          className="h5"
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
                  <Row>
                    <Col>
                      <FormGroup>
                        <label><h4>Address</h4></label>
                        <Input
                          className="h5-black"
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
                  <Row>
                    <Col>
                    <label><h4>Upload Logo</h4></label>
                  <div {...getRootProps({style})}>
                    <input
                    {...getInputProps()} />
                    <p>Drag 'n' drop your image file here, or click to select files</p>
                  </div>

                  <h4>File Details</h4>
                  <ul>
                    {files}
                  </ul>
                  </Col>
                  </Row>
                  
                  <Row className="d-flex justify-content-between">
                    <Col className="text-center">
                      <Button
                        id="POST"
                        type="submit"
                        color="success"
                        size="sm"
                        name=""
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-check-bold" />
                        </span>
                        <span className="btn-inner--text">Add</span>
                        
                      </Button>
                    </Col>
                    <Col className="text-center">
                      <Link to={"/admin/SponsorList"}>
                        <Button color="primary" size="sm" name="" type="reset">
                          Cancle
                        </Button>
                      </Link>
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

export default Add_Sponsor;
