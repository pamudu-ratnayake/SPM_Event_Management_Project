// reactstrap components
import React, { useState , useMemo } from "react";
import {useDropzone} from 'react-dropzone'

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  Modal,
  CardBody,
  FormGroup,
  CardImg,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
// core components
import AdvertisementHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/AdvertisementHeader";

import { useFormik } from "formik";

const AdvertisementInformation = (props) => {

  const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }

  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '90px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#ffffff',
    color: '#bdbdbd',
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


  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    service_Provider_Name: "",
    contact_Number_SP: "",
    email_SP: "",
    service_Type: "",
    advertisement_Duration: "",
    advertisement_title:"",
    advertisement_Des: "",
    advertisement_Pic: "",
  };

  const validationSchema = Yup.object({
    service_Provider_Name: Yup.string().required("Required !"),
    contact_Number_SP: Yup.string().matches(
      phoneRegExp,
      "Phone Number is not Valid !"
    ).min(10, "Too short").max(10,"Too Long"),
    email_SP: Yup.string().email("Invalid Email!").required("Required !"),
    service_Type: Yup.string().required("Required !"),
    advertisement_Duration: Yup.string().required("Required !"),
    advertisement_title:Yup.string().required("Required !"),
    advertisement_Des: Yup.string().required("Required !"),
    advertisement_Pic: Yup.string().required("Required !"),
    // cardtype: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("form data", values);
    axios
      .post("http://localhost:8080/advertisement/addadvertisement", values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        // history.pushState({
        //   pathname: ''
        // })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues,
   // onSubmit,
    validationSchema,
  });

  // const Addtitle = formik.value.advertisement_title;
  // const Adddes = formik.value.advertisement_Des ;

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
                          value={formik.values.service_Provider_Name}
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
                          value={formik.email_SP}
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
                          value={formik.values.contact_Number_SP}
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
                          value={formik.service_Type}
                          id="Service_Type"
                          name="service_Type"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>Photographer</option>
                          <option>Decorater</option>
                          <option>Dancers</option>
                          <option>Catering</option>
                          <option>Cake Designer</option>
                          <option>Costume Designer</option>
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
                          value={formik.advertisement_Duration}
                          id="Advertisement_Duration"
                          name="advertisement_Duration"
                          type="select"
                        >
                          <option>Choose...</option>
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
                  <FormGroup>
                      <label>Advertisement Title </label>
                      <Input
                        mb="3"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.advertisement_title}
                        id="Advertisement_title"
                        name="advertisement_title"
                        placeholder="Enter your Advertisement Title here ...................."
                        rows="2"
                        type="textarea"
                      />
                      {formik.touched.advertisement_title &&
                      formik.errors.advertisement_title ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.advertisement_title}
                        </div>
                      ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" mt="3">
                      <label>Advertisement Description </label>
                      <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.advertisement_Des}
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
                    
                      {/* <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.advertisement_Pic}
                        id="Advertisement_Pic"
                        name="advertisement_Pic"
                        placeholder="Enter your Advertisement Picture here ..................."
                        rows="6"
                        type="textarea"
                      /> */}
                        <div {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop your image file here, or click to select files</p>
                  </div>

                  <h4>File Details</h4>
                  <ul>
                    {files}
                  </ul>

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
                          value={formik.cardtype}
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
                    <Col className="text-center" xs="3" >
                      <Button
                        block
                        className="mb-4 ml-9"
                        color="primary"
                        type="button"
                        onClick={() => toggleModal("defaultModal")}
                      >
                        Request Advertisement
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
                    <Col className="text-center ml-9" xs="4">
                      <Button
                        className="mr-2 ml-9"
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

export default AdvertisementInformation;
