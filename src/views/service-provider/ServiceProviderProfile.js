import React, { useState, useEffect } from "react";
import EditProfileModal from "./moadals/EditProfileModal";
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

const ServiceProviderProfile = () => {
	useEffect(() => {
		// Run! Like go get some data from an API.
		document.getElementById("input-username").disabled = true;
	}, []);

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
											<div>
												<span className="heading">22</span>
												<span className="description">Rating </span>
											</div>
											<div>
												<span className="heading">10</span>
												<span className="description">Completed</span>
											</div>
											<div>
												<span className="heading">89</span>
												<span className="description">Comments</span>
											</div>
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
										<Button
											color="primary"
											href="#pablo"
											onClick={(e) => {
												document.getElementById(
													"input-username"
												).disabled = false;
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
														htmlFor="serviceProvideId"
													>
														Service Provider ID
													</label>
													<Input
														className="form-control-alternative"
														defaultValue="SPS00001"
														id="serviceProvideId"
														placeholder="SPS00001"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label className="form-control-label" htmlFor="nicNo">
														NIC NO
													</label>
													<Input
														className="form-control-alternative"
														id="nicNo"
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
									{/* Address */}
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
														id="input-mobil"
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

export default ServiceProviderProfile;
