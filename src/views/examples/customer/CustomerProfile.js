import { useFormik } from "formik";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import * as Yup from "yup";
import myavatar from "assets/img/theme/profile-avatar.png"

// reactstrap components
import {
	Button,
	Card,
	CardImg,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	Modal,
} from "reactstrap";
// core components
import CustomerProfileHeader from "components/Headers/CustomerProfileHeader.js";
import API from "variables/tokenURL";
import { Radio, RadioGroup } from "@material-ui/core";

const CustomerProfile = (props) => {
	const baseStyle = {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "90px",
		borderWidth: 2,
		borderRadius: 2,
		borderColor: "#A9A9B0",
		borderStyle: "dashed",
    marginBottom: '20px',
		backgroundColor: "#ffffff",
		color: "default",
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

	const [files, setFiles] = useState([]);

	const {
		acceptedFiles,
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
		open,
	} = useDropzone({
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept]
	);

	const filepath = acceptedFiles.map((file) => (
		<li key={file.name}>
			{file.name} - {file.size} bytes
		</li>
	));

	const user = JSON.parse(localStorage.getItem("profile"));

  const [customer, setCustomer] = useState("");
  const [oneUser, setOneUser] = useState(0);

	const initialValues = {
		enableReinitialize: true,
		validateOnMount: true,
		cus_userName: oneUser.firstName,
		user_id: user?.result?._id,
		cus_FName: oneUser.firstName,
		cus_LName: oneUser.lastName,
		cus_email: oneUser.email,
		cus_contact_no: "",
		cus_address: "",
		cus_nic: "",
		cus_description: "",
		cus_gender: "",
	};

	const validationSchema = Yup.object({
		cus_userName: Yup.string().required("*Required!"),
		cus_FName: Yup.string().required("*Required!"),
		cus_LName: Yup.string().required("*Required!"),
		cus_email: Yup.string().required("*Required!"),
		cus_contact_no: Yup.string().required("*Required!"),
		cus_address: Yup.string().required("*Required!"),
		cus_nic: Yup.string().required("*Required!"),
		cus_description: Yup.string().required("*Required!"),
	});

	const onSubmit = (values) => {
		console.log("Form Date", values);
		console.log("files", acceptedFiles);
		//  values.date_of_the_event = event_date; //watch
		let formdata = new FormData();
		formdata.append("cus_userName", values.cus_userName);
		formdata.append("cus_FName", values.cus_FName);
		formdata.append("cus_LName", values.cus_LName);
		formdata.append("cus_email", values.cus_email);
		formdata.append("cus_contact_no", values.cus_contact_no);
		formdata.append("cus_address", values.cus_address);
		formdata.append("cus_description", values.cus_description);
		formdata.append("cus_nic", values.cus_nic);
		formdata.append("file", acceptedFiles[0]);
		formdata.append("user_id", values.user_id);
		formdata.append("cus_gender", values.cus_gender);


    API
      .post("/customerdetails/addcustomer", formdata)
      .then((res) => {
        console.log(res);
        console.log("Data", formdata);
      })
      .catch((error) => {
        console.log(error);
      });
     window.location.reload(false);
  };

  // useEffect(() => {
  //   API.get(`/customerdetails/getOneCustomer/${user?.result?._id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setCustomer(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    API.get(`/auth-user/get-user`)
      .then((res) => {
        console.log(res);
        setOneUser(res.data);

        API.get(`/customerdetails/getOneCustomer/${user?.result?._id}`)
        .then((res) => {
          console.log(res);
          setCustomer(res.data);
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    //use formik here
    const formik = useFormik({
      enableReinitialize: true,
      validateOnMount: true,
      initialValues,
      onSubmit,
      validationSchema,
    });

	console.log("sdsad", oneUser.firstName);

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
                      <img  className="rounded-circle" src={customer?.prof_img} alt="..." />
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
										<Button
                    
											color="primary"
											href="#pablo"
											size="sm"
											type="button"
											onClick={() => toggleModal("defaultModal")}
										>
                          <span className="btn-inner--icon">
                        < i className="ni ni-ruler-pencil"/>
                        </span>
                        <span className="btn-inner--text"> 
											Edit Profile
                      </span>
										</Button>
										<Modal
											className="modal-dialog-centered"
											isOpen={defaultModal}
											toggle={() => toggleModal("defaultModal")}
										>
											<div className="modal-header">
												<h6 className="modal-title" id="modal-title-default">
													Type your modal title
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
												<p>Are you sure?</p>
											</div>
											<div className="modal-footer">
												<Button color="primary" type="button">
													Save changes
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

										{/* <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                      Edit Profile
                    </Button> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                  <h6 className="heading-small text-muted mb-4">User information</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Username</label>
                          <Input id="exampleFormControlInput1" type="text" name="cus_userName" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={oneUser.firstName} />
                          {formik.touched.cus_userName && formik.errors.cus_userName ? <div style={{ color: "red" }}>{formik.errors.cus_userName}</div> : null}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="customerEmail">
                            Email
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={oneUser.email}
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            type="text"
                            name="cus_email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled
                          />
                          {formik.touched.cus_email && formik.errors.cus_email ? <div style={{ color: "red" }}>{formik.errors.cus_email}</div> : null}
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
                            id="exampleFormControlInput1"
                            placeholder="First Name"
                            type="text"
                            name="cus_FName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            defaultValue={oneUser.firstName}
                          />
                          {formik.touched.cus_FName && formik.errors.cus_FName ? <div style={{ color: "red" }}>{formik.errors.cus_FName}</div> : null}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            id="exampleFormControlInput1"
                            placeholder="Last Name"
                            type="text"
                            name="cus_LName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            defaultValue={oneUser.lastName}
                          />
                          {formik.touched.cus_LName && formik.errors.cus_LName ? <div style={{ color: "red" }}>{formik.errors.cus_LName}</div> : null}
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
                            id="customerConNo"
                            placeholder="Contact Number"
                            type="text"
                            name="cus_contact_no"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // value={formik.values.cus_contact_no}
                            defaultValue={customer && customer.cus_contact_no}
                          />
                          {formik.touched.cus_contact_no && formik.errors.cus_contact_no ? <div style={{ color: "red" }}>{formik.errors.cus_contact_no}</div> : null}
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
                            defaultValue={customer && customer.cus_nic}
                          />
                          {formik.touched.cus_nic && formik.errors.cus_nic ? <div style={{ color: "red" }}>{formik.errors.cus_nic}</div> : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <label className="form-control-label" htmlFor="customerGender">
                      Gender
                    </label>
                    <div className="ml-5">
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          id="customRadio5"
                          name="cus_gender"
                          type="radio"
                          value="male"
                          as={RadioGroup}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label className="custom-control-label" htmlFor="customRadio5">
                          Male
                        </label>
                      </div>
                      <div className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          id="customRadio6"
                          name="cus_gender"
                          type="radio"
                          value="female"
                          as={RadioGroup}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
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
                            id="customerAddress"
                            placeholder="Home Address"
                            type="text"
                            name="cus_address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            defaultValue={customer && customer.cus_address}
                          />
                          {formik.touched.cus_address && formik.errors.cus_address ? <div style={{ color: "red" }}>{formik.errors.cus_address}</div> : null}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

									<div {...getRootProps({ style })}>
										<input {...getInputProps()} />
										{/* <FileBase><input {...getInputProps()} /></FileBase> */}
										<p>
											Drag 'n' drop your image file here, or click to select
											files
										</p>
									</div>

									<h4>File Details</h4>
									<ul>{filepath}</ul>

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
                        type="textarea"
                        name="cus_description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        defaultValue={customer && customer.cus_description}
                      />
                      {formik.touched.cus_description && formik.errors.cus_description ? <div style={{ color: "red" }}>{formik.errors.cus_description}</div> : null}
                    </FormGroup>
                  </div>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                    <span className="btn-inner--icon">
                        < i className="ni ni-single-copy-04"/>
                        </span>
                        <span className="btn-inner--text">
                      Add My Details
                      </span>
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
