// reactstrap components
import React, { useState , useMemo } from "react";
import {useDropzone} from 'react-dropzone'
import API from "variables/tokenURL";

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

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
  };
  
  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: "auto",
    height: 200,
    padding: 4,
    boxSizing: "border-box"
  };
  
  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
  };
  
  const img = {
    display: "block",
    width: "auto",
    height: "100%"
  };
  
  const [files, setFiles] = useState([]);

  const {acceptedFiles, getRootProps, getInputProps, isDragActive,
    isDragAccept,
    isDragReject} = useDropzone({onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }})

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

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  const filepath = acceptedFiles.map(file => (
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
    boosting_Pack:""
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
    // advertisement_Pic: Yup.string().required("Required !"),
    
    // cardtype: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("form data", values);
    console.log('files', acceptedFiles);
    
    let formdata = new FormData();
    formdata.append("service_Provider_Name", values.service_Provider_Name);
    formdata.append("contact_Number_SP", values.contact_Number_SP);
    formdata.append("email_SP", values.email_SP);
    formdata.append("service_Type", values.service_Type);
    formdata.append("advertisement_Duration", values.advertisement_Duration);
    formdata.append("advertisement_title", values.advertisement_title);
    formdata.append("advertisement_Des", values.advertisement_Des);
    formdata.append("file", acceptedFiles[0]);

    API
      .post("/advertisement/addadvertisement", formdata)
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
    onSubmit,
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
                    {filepath}
                  </ul>

                  

                      {formik.touched.advertisement_Pic &&
                      formik.errors.advertisement_Pic ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.advertisement_Pic}
                        </div>
                      ) : null}
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
                            {/* <CardImg
                              alt="..."
                              src={require("assets/img/theme/ui.jpg").default}
                              top
                            /> */}
                               <aside style={thumbsContainer}>{thumbs}</aside>
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
