import React, { useState, useEffect } from "react";
import API from "variables/tokenURL";
// Modals
import EditProfileModal from "./moadals/EditProfileModal";
import RatingModal from "./moadals/RatingModal";
// Form Element
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
} from "reactstrap";
// core components
import ServiceProviderHeader from "components/Headers/service-provider-header/ServiceProviderHeader";
import CommentModal from "./moadals/CommentModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ServiceProviderProfile = (props) => {
	const [posts, setPosts] = useState("");
	const [profile, setprofile] = useState(0);

	useEffect(() => {
		console.log("res.dat ");
		API
			.get(`/company/`)
			.then((res) => {
				setPosts(res.data[0]);
				console.log(res.data[0]);
			})
			.catch((error) => {
				console.log(error);
			});

		API
			.get(`/serviceProvider/getOne`)
			.then((res) => {
				setprofile(res.data[0]);
				console.log(res.data[0]);
				console.log(res.data[0].servic_provider_Id);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const deleteCompany = () => {
		if (window.confirm("Are you sure you wish to delete this item?")) {
			API
				.delete(`/company/delete/${posts._id}`)
				.then((res) => {
					// setPosts(res.data);
					console.log(res.data);
					alert(posts.company_name + " has Deleted !");
					window.location.reload(false);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const initialValues = {
		servic_provider_Id: profile.servic_provider_Id,
		nic_no: profile.nic_no,
		first_name: profile.first_name,
		last_name: profile.last_name,
		user_name: profile.user_name,
		email: profile.email,
		mobile: profile.mobile,
		telephone: profile.telephone,
		address: profile.address,
	};

	const validationSchema = Yup.object({
		servic_provider_Id: Yup.string().required("*Required!"),
		nic_no: Yup.string().required("*Required!"),
		user_name: Yup.string().required("*Required!"),
		first_name: Yup.string().required("*Required!"),
		last_name: Yup.string().required("*Required!"),
		email: Yup.string().email("*Invalid email!").required("*Required!"),
		mobile: Yup.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("*Required!")
			.min(10, "Too short")
			.max(10, "Too long"),
		telephone: Yup.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("*Required!")
			.min(10, "Too short")
			.max(10, "Too long"),
		address: Yup.string().required("*Required!"),
	});

	const onSubmit = (values) => {
		console.log("Form Date", values);
		//  values.date_of_the_event = event_date; //watch
		API
			.put(
				`/serviceProvider/update/${profile._id}`,
				values
			)
			.then((res) => {
				console.log(res);
				console.log("Data", values);
				alert("Updated Successfully !!");
				disableInputs();
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

	function disableInputs() {
		document.getElementById("input-service-provider").disabled = true;
		document.getElementById("input-nic-no").disabled = true;
		document.getElementById("input-username").disabled = true;
		document.getElementById("input-first-name").disabled = true;
		document.getElementById("input-last-name").disabled = true;
		document.getElementById("input-email").disabled = true;
		document.getElementById("input-telephone").disabled = true;
		document.getElementById("input-mobile").disabled = true;
		document.getElementById("input-address").disabled = true;
		document.getElementById("btn-save").style.display = "none";
	}

	return (
		<>
			<ServiceProviderHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
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
							<CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
								<div className="d-flex justify-content-between">
									<EditProfileModal />

									<Button
										className="float-right"
										color="danger"
										href="#pablo"
										onClick={deleteCompany}
										size="sm"
									>
										Delete
									</Button>
								</div>
							</CardHeader>
							<CardBody className="pt-0 pt-md-4">
								<Row>
									<div className="col">
										<div className="card-profile-stats d-flex justify-content-center mt-md-5">
											{/* Rating Modal */}
											<RatingModal />
											<div>
												<span className="heading">10</span>
												<span className="description">Completed</span>
											</div>
											{/* Comment Modal */}
											<CommentModal />
										</div>
									</div>
								</Row>
								<div className="text-center">
									<h3>
										{profile.user_name}
										<span className="font-weight-light"></span>
									</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										{profile.address}
									</div>
									<div className="h5 mt-4">
										<i className="ni business_briefcase-24 mr-2" />

										{posts.service_provider_type}
									</div>
									<div>
										<i className="ni education_hat mr-2" />
										{posts.company_name} (pvt) Ltd
									</div>
									<hr className="my-4" />
									<p>{posts.details}</p>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										Show more
									</a>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col className="order-xl-1" xl="8">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="8">
										<h3 className="mb-0">My account</h3>
									</Col>
									<Col className="text-right" xs="4">
										<Button size="sm">Download PDF</Button>
										<Button
											color="primary"
											href="#pablo"
											onClick={(e) => {
												document.getElementById(
													"input-service-provider"
												).disabled = true;
												document.getElementById(
													"input-nic-no"
												).disabled = false;
												document.getElementById(
													"input-username"
												).disabled = false;
												document.getElementById(
													"input-first-name"
												).disabled = false;
												document.getElementById(
													"input-last-name"
												).disabled = false;
												document.getElementById("input-email").disabled = false;
												document.getElementById(
													"input-telephone"
												).disabled = false;
												document.getElementById(
													"input-mobile"
												).disabled = false;
												document.getElementById(
													"input-address"
												).disabled = false;
												document.getElementById("btn-save").style.display =
													"block";
											}}
											size="sm"
										>
											Edit
										</Button>
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
														htmlFor="input-service-provider"
													>
														Service Provider ID
													</label>
													<Input
														className="form-control-alternative"
														id="input-service-provider"
														placeholder="SPS00001"
														type="text"
														name="servic_provider_Id"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.servic_provider_Id}
													>
														{profile.servic_provider_Id}
													</Input>
													{formik.touched.servic_provider_Id &&
													formik.errors.servic_provider_Id ? (
														<div style={{ color: "red" }}>
															{formik.errors.servic_provider_Id}
														</div>
													) : null}
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-nic-no"
													>
														NIC NO
													</label>
													<Input
														className="form-control-alternative"
														id="input-nic-no"
														placeholder="jesse@example.com"
														type="text"
														name="nic_no"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.nic_no}
													>
														{profile.nic_no}
													</Input>
													{formik.touched.nic_no && formik.errors.nic_no ? (
														<div style={{ color: "red" }}>
															{formik.errors.nic_no}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>

										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-username"
													>
														Username
													</label>
													<Input
														className="form-control-alternative"
														id="input-username"
														placeholder="Username"
														type="text"
														name="user_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.user_name}
													>
														{profile.user_name}
													</Input>
													{formik.touched.user_name &&
													formik.errors.user_name ? (
														<div style={{ color: "red" }}>
															{formik.errors.user_name}
														</div>
													) : null}
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-email"
													>
														Email address
													</label>
													<Input
														className="form-control-alternative"
														id="input-email"
														placeholder="Enter email address"
														type="text"
														name="email"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.email}
													>
														{profile.email}
													</Input>
													{formik.touched.email && formik.errors.email ? (
														<div style={{ color: "red" }}>
															{formik.errors.email}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-first-name"
													>
														First name
													</label>
													<Input
														className="form-control-alternative"
														id="input-first-name"
														placeholder="First name"
														type="text"
														name="first_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.first_name}
													>
														{profile.first_name}
													</Input>
													{formik.touched.first_name &&
													formik.errors.first_name ? (
														<div style={{ color: "red" }}>
															{formik.errors.first_name}
														</div>
													) : null}
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-last-name"
													>
														Last name
													</label>
													<Input
														className="form-control-alternative"
														id="input-last-name"
														placeholder="Last name"
														type="text"
														name="last_name"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.last_name}
													>
														{profile.last_name}
													</Input>
													{formik.touched.last_name &&
													formik.errors.last_name ? (
														<div style={{ color: "red" }}>
															{formik.errors.last_name}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className="my-4" />
									<h6 className="heading-small text-muted mb-4">
										Contact information
									</h6>
									<div className="pl-lg-4">
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-telepohon"
													>
														Telephone
													</label>
													<Input
														className="form-control-alternative"
														id="input-telephone"
														placeholder="0112699151"
														type="text"
														name="telephone"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.telephone}
													>
														{profile.telephone}
													</Input>
													{formik.touched.telephone &&
													formik.errors.telephone ? (
														<div style={{ color: "red" }}>
															{formik.errors.telephone}
														</div>
													) : null}
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-mobile"
													>
														Mobile
													</label>
													<Input
														className="form-control-alternative"
														id="input-mobile"
														placeholder="0770599151"
														type="text"
														name="mobile"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.mobile}
													>
														{profile.mobile}
													</Input>
													{formik.touched.mobile && formik.errors.mobile ? (
														<div style={{ color: "red" }}>
															{formik.errors.mobile}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>

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
														id="input-address"
														placeholder="Home Address"
														type="text"
														name="address"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														defaultValue={profile.address}
													>
														{profile.address}
													</Input>
													{formik.touched.address && formik.errors.address ? (
														<div style={{ color: "red" }}>
															{formik.errors.address}
														</div>
													) : null}
												</FormGroup>
											</Col>
										</Row>
									</div>
									<Button
										id="btn-save"
										className="float-right"
										color="success"
										type="submit"
									>
										Save
									</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col className="w-50">
						<Card style={{ width: "34rem" }}>
							{/* <CardBody> */}
							<div
								className=""
								style={{
									width: "540px",
									height: "360px",
									backgroundImage:
										"url(" +
										require("../../assets/img/theme/musicEvent.jpg").default +
										")",
									backgroundSize: "cover",
									backgroundPosition: "center top",
								}}
							>
								<div className="float-end m-1">
									<Button
										className=""
										color="transparent"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										size="sm"
									>
										<i class="bx bxs-cog bx-spin fs-6 text-white"></i>
									</Button>
								</div>
							</div>
							{/* </CardBody> */}
						</Card>
					</Col>
					<Col className="w-50">
						<Card style={{ width: "34rem" }}>
							{/* <CardBody> */}
							<div
								className=""
								style={{
									width: "540px",
									height: "360px",
									backgroundImage:
										"url(" +
										require("../../assets/img/theme/musicEvent2.jpg").default +
										")",
									backgroundSize: "cover",
									backgroundPosition: "center top",
								}}
							>
								<div className="float-end m-1">
									<Button
										className=""
										color="transparent"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										size="sm"
									>
										<i class="bx bxs-cog bx-spin fs-6 text-white"></i>
									</Button>
								</div>
							</div>
							{/* </CardBody> */}
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ServiceProviderProfile;
