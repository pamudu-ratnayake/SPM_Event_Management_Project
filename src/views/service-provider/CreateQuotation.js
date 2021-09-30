import React, { useState, useEffect } from "react";
import "boxicons";
import API from "variables/tokenURL";

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

const CreateQuotation = (props) => {
	// Taking Current User
	const user = JSON.parse(localStorage.getItem("profile")).result;

	// Form Inputs Varibales
	const [item_details, setItem_details] = useState([]);
	const [date_from, setDate_from] = useState("");
	const [date_to, setDate_to] = useState("");
	const [terms, setTerms] = useState("");
	const [itemNameTemp, setItemNameTemp] = useState("");
	const [quantityTemp, setQuantityTemp] = useState(0);
	const [unitPriceTemp, setUnitPriceTemp] = useState(0);
	const [totalPriceTemp, setTotalPriceTemp] = useState(0);
	const [cost, setCost] = useState(0);

	// Form Inputs Varibales
	const [event_id, setEvent_id] = useState("");
	const [profile, setprofile] = useState("");
	const [company, setCompany] = useState("");
	const [event, setEvent] = useState("");

	// Operation Varibales
	let total = 0;
	let today = new Date().toISOString().split("T")[0];

	const initialValues = {
		date_to: "",
		terms: "",
	};

	const validationSchema = Yup.object({
		date_to: Yup.string()
			.required("*Required!")
			.min(date_from, `Cannot accept befor ${date_from}`),
		terms: Yup.string(),
	});

	useEffect(() => {
		if (total <= 0) {
			API.get(`/eventAdd/getOneEvent/${props.match.params._id}`)
				.then((res) => {
					setEvent(res.data);
				})
				.catch((error) => {
					console.log(error);
				});

			API.get(`/serviceProvider/getByUser/${user._id}`)
				.then((res) => {
					let data = res.data;
					setprofile(data);

					API.get(`/company/get/${data.company_id}`).then((res) => {
						setCompany(res.data);
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
		item_details.forEach((aItem) => {
			total += aItem.total_price;
		});
		if (total > 0) {
			setCost(total);
		}
	}, [item_details]);

	const onSubmit = (values) => {
		if (item_details && item_details.length > 0) {
			let newQuotation = {
				event_id: event._id,
				provider_id: profile._id,
				date_from: today,
				date_to: values.date_to,
				quotation_details: item_details,
				terms: values.terms,
				approve: false,
			};

			API.post(`/quotation/create`, newQuotation)
				.then((res) => {
					alert("Created Successfully !!");
				})
				.catch((error) => {
					alert("Fail to Create !!");
					console.log(error);
				});
		} else {
			alert("You should add minimum 1 item");
		}
	};

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<>
			<CreateQuotionHeader />
			{/* Page content */}
			<Container className="mt--9" fluid>
				<Row>
					<Col className="order-xl-1" xl="12">
						<Card className="bg-secondary shadow">
							<Form onSubmit={formik.handleSubmit}>
								<CardHeader className="bg-secondary border-0">
									<Row className="align-items-center">
										<Row className="d-flex flex-row-reverse bd-highlight">
											<div className="col-2 text-right">
												<Button size="sm"> Download Pdf</Button>
											</div>
										</Row>
										<Row className="mt-3">
											<Col xs="10">
												<h3 className="mb-0 text-success display-4">
													{company.company_name}
												</h3>
											</Col>
											<Col className="text-right" xs="2">
												<h3 className="mb-0 text-success display-4">
													Quotaion
												</h3>
											</Col>
										</Row>
										<Row>
											<Col xs="8">
												{profile.first_name} {profile.last_name}{" "}
											</Col>
											<Col className="text-right" xs="4"></Col>
										</Row>
										<Row className="">
											<Col xs="8">Ph : {profile.mobile} </Col>
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
												<h3> {event.org_name} </h3>
											</Col>

											<Col className="text-right" xs="4">
												<Row>
													<Col xs="6">
														<h4> VALID DATE FROM : </h4>
													</Col>
													<Col xs="6">
														<FormGroup>
															<Input
																size="sm"
																className="form-control-alternative bg-secondary mt--1"
																id="input-date-from"
																name="date_from"
																value={today}
																disabled
															></Input>
														</FormGroup>
													</Col>
												</Row>
											</Col>
										</Row>
										<Row className="mt--2">
											<Col xs="8 ">{event.location}</Col>
											<Col className="text-right" xs="4">
												<Row>
													<Col xs="6">
														<h4>TO : </h4>
													</Col>
													<Col xs="6">
														<FormGroup>
															<Input
																size="sm"
																className="form-control-alternative mt--1"
																id="input-date-to"
																name="date_to"
																type="date"
																min={today}
																onChange={formik.handleChange}
																onBlur={formik.handleBlur}
															></Input>
															{formik.touched.date_to &&
															formik.errors.date_to ? (
																<div style={{ color: "red" }}>
																	{formik.errors.date_to}
																</div>
															) : null}
														</FormGroup>
													</Col>
												</Row>
											</Col>
										</Row>
										<Row className="mt--4">
											<Col xs="8">{event.cus_email}</Col>
											<Col className="text-right" xs="4"></Col>
										</Row>
										<Row className="">
											<Col xs="8">Ph : {event.cus_con_number} </Col>
										</Row>
									</Row>
								</CardHeader>
								<CardBody className="mb-5">
									<Table className="align-items-center" responsive>
										<thead className="thead-light">
											<tr>
												<th className="col-6">
													<h5>Item Description</h5>
												</th>
												<th scope="col-1">
													<h5>Quantity</h5>
												</th>
												<th className="col-2 text-center">
													<h5>Unit Price</h5>
												</th>
												<th className="col-2 text-center">
													<h5>Total</h5>
												</th>
												<th scope="col-1">
													<h5 className=""> Action</h5>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className="bg-gradient-green">
												<td className="pb-0" className="pb-0">
													<FormGroup>
														<Input
															className="form-control-alternative"
															id="input-item-name-i"
															type="text"
															value={itemNameTemp}
															onChange={(e) => setItemNameTemp(e.target.value)}
														></Input>
													</FormGroup>
												</td>
												<td className="pb-0">
													<FormGroup>
														<Input
															className="form-control-alternative"
															id="input-nic-no"
															type="number"
															name="quantity"
															value={quantityTemp}
															onChange={(e) => {
																setQuantityTemp(e.target.value);
															}}
														></Input>
													</FormGroup>
												</td>
												<td className="pb-0">
													<FormGroup>
														<Input
															className="form-control-alternative"
															id="input-nic-no"
															placeholder="jesse@example.com"
															type="number"
															name="unit_price"
															value={unitPriceTemp}
															onChange={(e) => {
																setUnitPriceTemp(e.target.value);
															}}
														></Input>
													</FormGroup>
												</td>
												<td className="pb-0">
													<FormGroup>
														<Input
															className="form-control-alternative bg-secondary text-success fs-5"
															id="input-nic-no"
															type="text"
															value={quantityTemp * unitPriceTemp}
															disabled
														></Input>
													</FormGroup>
												</td>
												<td className="pb-0" className="pt-0">
													<Button
														className=""
														color="primary"
														type="button"
														href="#pablo"
														size="sm"
														onClick={() => {
															if (
																itemNameTemp &&
																quantityTemp &&
																unitPriceTemp
															) {
																let item = {
																	item_name: itemNameTemp,
																	quantity: quantityTemp,
																	unit_price: unitPriceTemp,
																	total_price: quantityTemp * unitPriceTemp,
																};

																setItem_details([...item_details, item]);

																setItemNameTemp("");
																setQuantityTemp(0);
																setUnitPriceTemp(0);
															} else {
																document.getElementById(
																	"input-item-name-i"
																).style.border = "2px solid red";
															}
														}}
													>
														ADD
													</Button>
												</td>
											</tr>
											{item_details.map((aItem, key) => (
												<tr key={key}>
													<td className="pb-0">
														<FormGroup>
															<Input
																className="form-control-alternative bg-secondary text-black"
																id="input-item-name"
																type="text"
																value={aItem.item_name}
																disabled
															></Input>
														</FormGroup>
													</td>
													<td className="pb-0">
														<FormGroup>
															<Input
																className="form-control-alternative bg-secondary text-black"
																id="input-nic-no"
																type="number"
																name="quantity"
																value={aItem.quantity}
																disabled
															></Input>
														</FormGroup>
													</td>
													<td className="pb-0">
														<FormGroup>
															<Input
																className="form-control-alternative bg-secondary text-black"
																id="input-nic-no"
																placeholder="jesse@example.com"
																type="number"
																name="unit_price"
																value={aItem.unit_price}
																disabled
															></Input>
														</FormGroup>
													</td>
													<td className="pb-0">
														<FormGroup>
															<Input
																className="form-control-alternative bg-secondary text-success fs-5"
																id="input-nic-no"
																type="text"
																value={aItem.total_price}
																disabled
															></Input>
														</FormGroup>
													</td>
													<td>
														<Button
															color="secondary"
															href="#pablo"
															onClick={() => {
																if (
																	window.confirm(
																		"Are you sure you wish to delete this item? " +
																			key
																	)
																) {
																	// let itemsToDelet = item_details;
																	item_details.splice(key, 1);
																	setItem_details([...item_details]);
																}
															}}
															size="sm"
														>
															<i class="ni ni-scissors text-danger"></i>
														</Button>
													</td>
												</tr>
											))}
										</tbody>
									</Table>

									<div className="pl-lg-4">
										<Row className="mt-3">
											<Col className="text-right col-8 mt-3">
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
														className="form-control-alternative fs-4  bg-secondary text-success"
														id="input-nic-no"
														type="text"
														value={cost}
														disabled
													></Input>
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
														id="input-terms"
														placeholder="Enter Terms & Condition"
														type="textarea"
														name="terms"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
													></Input>
													{formik.touched.terms && formik.errors.terms ? (
														<div style={{ color: "red" }}>
															{formik.errors.terms}
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
								</CardBody>
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CreateQuotation;
