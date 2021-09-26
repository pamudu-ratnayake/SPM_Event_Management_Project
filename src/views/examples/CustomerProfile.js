import { useFormik } from "formik";
import React, { useState } from "react";
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
	Modal,
} from "reactstrap";
// core components
import CustomerProfileHeader from "components/Headers/CustomerProfileHeader.js";

const CustomerProfile = () => {
	const initialValues = {
		enableReinitialize: true,
		validateOnMount: true,
		user_name: "",
		user_id: "",
		f_name: "",
		l_name: "",
		user_email: "",
		user_conNumber: "",
		user_address: "",
		user_des: "",
	};

	//use formik here
	const formik = useFormik({
		initialValues,
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
											<img
												alt="..."
												className="rounded-circle"
												src={
													require("../../assets/img/theme/team-4-800x800.jpg")
														.default
												}
											/>
										</a>
									</div>
								</Col>
							</Row>

							<CardBody className="pt-0 pt-md-4 mt-8">
								<div className="text-center">
									<h3>
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
									<p>
										Ryan — the name taken by Melbourne-raised, Brooklyn-based
										Nick Murphy — writes, performs and records all of his own
										music.
									</p>
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
											Edit Profile
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
								<Form onSubmit={formik.handleSubmit}>
									<h6 className="heading-small text-muted mb-4">
										User information
									</h6>
									<div className="pl-lg-4">
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="customername"
													>
														Username
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="lucky.jesse"
														id="customername"
														placeholder="Username"
														type="text"
														name="user_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.user_name}
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="customerId"
													>
														User ID
													</label>
													<Input
														className="form-control-alternative"
														id="customerId"
														placeholder="jesse@example.com"
														type="text"
														name="user_id"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.user_id}
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="customerFirstName"
													>
														First Name
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Lucky"
														id="customerFirstName"
														placeholder="First Name"
														type="text"
														name="f_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.f_name}
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="customerLastName"
													>
														Last Name
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Jesse"
														id="customerLastName"
														placeholder="Last Name"
														type="text"
														name="l_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.l_name}
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="customerFirstName"
													>
														Email
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Lucky"
														id="customerFirstName"
														placeholder="First Name"
														type="text"
														name="user_email"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.user_email}
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="customerLastName"
													>
														Contact Number
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Jesse"
														id="customerLastName"
														placeholder="Last Name"
														type="text"
														name="user_conNumber"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.user_conNumber}
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col md="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-address"
													>
														NIC Number
													</label>
													<Input
														className="form-control-alternative"
														id="input-address"
														placeholder="NIC Number"
														type="text"
														namw="user_nic"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.user_nic}
													/>
												</FormGroup>
											</Col>
										</Row>
										<label
											className="form-control-label"
											htmlFor="customerLastName"
										>
											Gender
										</label>
										<div className="ml-5">
											<div className="custom-control custom-radio mb-3">
												<input
													className="custom-control-input"
													id="customRadio5"
													name="custom-radio-2"
													type="radio"
												/>
												<label
													className="custom-control-label"
													htmlFor="customRadio5"
												>
													Male
												</label>
											</div>
											<div className="custom-control custom-radio mb-3">
												<input
													className="custom-control-input"
													defaultChecked
													id="customRadio6"
													name="custom-radio-2"
													type="radio"
												/>
												<label
													className="custom-control-label"
													htmlFor="customRadio6"
												>
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
													<label
														className="form-control-label"
														htmlFor="input-address"
													>
														Address
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="Bld Mi"
														id="input-address"
														placeholder="Home Address"
														type="text"
														name="user_address"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.user_address}
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
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
												name="user_des"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.user_des}
											/>
										</FormGroup>
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
