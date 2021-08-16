import React, { useState, useEffect } from "react";
// Modals
import EditProfileModal from "./moadals/EditProfileModal";
import RatingModal from "./moadals/RatingModal";
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

const ServiceProviderProfile = () => {
	useEffect(() => {
		// Run! Like go get some data from an API.
		disableInputs(); // Disable Inputs
	}, []);

	function disableInputs() {
		document.getElementById("input-service-provider").disabled = true;
		document.getElementById("input-nic-no").disabled = true;
		document.getElementById("input-username").disabled = true;
		document.getElementById("input-first-name").disabled = true;
		document.getElementById("input-last-name").disabled = true;
		document.getElementById("input-email").disabled = true;
		document.getElementById("input-telepohone").disabled = true;
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
										color="default"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										size="sm"
									>
										Logout
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
										Malith Madusankha
										<span className="font-weight-light">, 27</span>
									</h3>
									<div className="h5 font-weight-300">
										<i className="ni location_pin mr-2" />
										Kadawatha, Gampaha
									</div>
									<div className="h5 mt-4">
										<i className="ni business_briefcase-24 mr-2" />
										Sound Provider
									</div>
									<div>
										<i className="ni education_hat mr-2" />
										JSound (pvt) Ltd
									</div>
									<hr className="my-4" />
									<p>
										I have work in this indurstry more than 10 years Ryan — the
										name taken by Melbourne-raised, Brooklyn-based Nick Murphy —
										writes, performs and records all of his own music.
									</p>
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
												).disabled = false;
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
													"input-telepohone"
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
								<Form>
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
														defaultValue="SPS00001"
														id="input-service-provider"
														placeholder="SPS00001"
														type="text"
													/>
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
														type="email"
													/>
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
														defaultValue="lucky.jesse"
														id="input-username"
														placeholder="Username"
														type="text"
													/>
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
														placeholder="jesse@example.com"
														type="email"
													/>
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
														defaultValue="Lucky"
														id="input-first-name"
														placeholder="First name"
														type="text"
													/>
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
														defaultValue="Jesse"
														id="input-last-name"
														placeholder="Last name"
														type="text"
													/>
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
														Telepohone
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="0112699151"
														id="input-telepohone"
														placeholder="0112699151"
														type="text"
													/>
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
														defaultValue="0112699151"
														id="input-mobile"
														placeholder="0770599151"
														type="text"
													/>
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
														defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
														id="input-address"
														placeholder="Home Address"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<Button
										id="btn-save"
										className="float-right"
										color="success"
										href="#pablo"
										onClick={disableInputs}
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
