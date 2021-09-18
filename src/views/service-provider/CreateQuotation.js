import React, { useState, useEffect } from "react";
import "boxicons";

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
	Table,
} from "reactstrap";
// core components
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CreateQuotionHeader from "components/Headers/service-provider-header/CreateQuotionHeader";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const CreateQuotation = (props) => {
	const [posts, setPosts] = useState([]);
	const [profile, setprofile] = useState(0);

	useEffect(() => {
		console.log("res.dat ");
		axios
			.get(`http://localhost:8080/serviceProvider/`)
			.then((res) => {
				setPosts(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get(`http://localhost:8080/serviceProvider/getOne`)
			.then((res) => {
				setprofile(res.data[0]);
				console.log(res.data[0]);
				console.log(res.data[0].servic_provider_Id);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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
		axios
			.put(
				`http://localhost:8080/serviceProvider/update/${profile._id}`,
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
			<CreateQuotionHeader />
			{/* Page content */}
			<Container className="mt--9" fluid>
				<Row>
					<Col className="order-xl-1" xl="12">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-secondary border-0">
								<Row className="align-items-center">
									<Row className="d-flex flex-row-reverse bd-highlight">
										<div class="col-1 text-right">
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
													document.getElementById(
														"input-email"
													).disabled = false;
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
										</div>
										<div className="col-2 text-right">
											<Button size="sm"> Download Pdf</Button>
										</div>
									</Row>
									<Row className="mt-3">
										<Col xs="10">
											<h3 className="mb-0 text-success display-4">
												Company Name
											</h3>
										</Col>
										<Col className="text-right" xs="2">
											<h3 className="mb-0 text-success display-4">Quotaion</h3>
										</Col>
									</Row>

									<Row className="mt-3">
										<Col xs="9">
											<h3 className="mb-0 text-success h2 ">Quotaion to :</h3>
										</Col>
										<Col className="text-right" xs="3">
											<h3 className="mb-0 text-success h2 ">
												Quotaion Details :
											</h3>
										</Col>
									</Row>
									<Row className="mt-3">
										<Col xs="8">
											<h3> Company Name</h3>
										</Col>
										<Col className="text-right" xs="4">
											<Row>
												<Col xs="6">
													<h4> VALID DATE FROM : </h4>
												</Col>
												<Col xs="6">11/09/2021</Col>
											</Row>
										</Col>
									</Row>
									<Row className="">
										<Col xs="8 ">445/2, Kandy Road, Kadawatha.</Col>
										<Col className="text-right" xs="4">
											<Row>
												<Col xs="6">
													<h4>TO : </h4>{" "}
												</Col>
												<Col xs="6">11/10/2021</Col>
											</Row>
										</Col>
									</Row>
									<Row className="">
										<Col xs="8">malith@gmail.com</Col>
										<Col className="text-right" xs="4">
											<Row>
												<Col xs="6">
													<h4>QUOTE NO : </h4>
												</Col>
												<Col xs="6"> #QT00125 </Col>
											</Row>
										</Col>
									</Row>
									<Row className="">
										<Col xs="8">Ph : 0112901271</Col>
									</Row>
								</Row>
							</CardHeader>
							<CardBody>
								<Form onSubmit={formik.handleSubmit}>
									<Table className="align-items-center" responsive>
										<thead className="thead-light">
											<tr>
												<th className="col-6">
													<h5>Item Description</h5>
												</th>
												<th scope="col-1">
													<h5>Quantity</h5>{" "}
												</th>
												<th className="col-2 text-center">
													<h5>Unit Price</h5>
												</th>
												<th className="col-2 text-center">
													<h5>Total</h5>
												</th>
												<th scope="col-1">
													<h5 className="ms-4"> Action</h5>{" "}
												</th>
											</tr>
										</thead>
										<tbody>
											{posts.map((posts) => (
												<tr key={posts._id}>
													<td>
														<FormGroup>
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
													</td>
													<td>
														<FormGroup>
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
													</td>
													<td>
														<FormGroup>
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
													</td>
													<td>
														<FormGroup>
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
													</td>
													<td className="pt-0">
														<Button
															className=""
															color="secondary"
															href="#pablo"
															onClick={() => {
																if (
																	window.confirm(
																		"Are you sure you wish to delete this item?"
																	)
																) {
																	axios
																		.delete(
																			`http://localhost:8080/serviceProvider/delete/${posts._id}`
																		)
																		.then((res) => {
																			// setPosts(res.data);
																			console.log(res.data);
																			window.location.reload(false);
																		})
																		.catch((error) => {
																			console.log(error);
																		});
																}
															}}
															size="sm"
														>
															<i class="ni ni-scissors text-danger"></i>
														</Button>
														<Button
															className=""
															color="primary"
															type="button"
															href="#pablo"
															size="sm"
															onClick={() => alert(posts._id)}
														>
															<i class="bx bx-plus-medical "></i>
														</Button>
													</td>
												</tr>
											))}
										</tbody>
									</Table>

									<div className="pl-lg-4">
										<Row className="mt-3">
											<Col className="text-right col-8 mt-2">
												<label
													className="form-control-label text-success fs-4"
													htmlFor="input-service-provider"
												>
													Total Cost
												</label>
											</Col>
											<Col lg="3" className="">
												<FormGroup>
													<Input
														className="form-control-alternative fs-5"
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
														className="form-control-label fs-5 text-success"
														htmlFor="input-email"
													>
														Terms And Condition
													</label>
													<Input
														className="form-control"
														id="input-email"
														placeholder="Enter email address"
														type="textarea"
														row="6"
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
									</div>
									<Button
										id="btn-save"
										className="float-right"
										color="success"
										type="submit"
									>
										Submite
									</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CreateQuotation;
