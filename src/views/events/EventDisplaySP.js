import ReactDatetime from "react-datetime";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

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
	Modal,
} from "reactstrap";
// core components
import ViewEventHeader from "components/Headers/ViewEventHeader";
import { useEffect, useState } from "react";

const EventDisplaySP = (props) => {
	console.log("ID is : ", props.match.params._id);

	const [event, setEvent] = useState(0);

	const [defaultModal, setState] = useState(false);
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	//toggle function
	function toggleModal() {
		setState(!defaultModal);
	}

	// function onStarClick(nextValue, prevValue, name) {
	//   setRating({ rating: nextValue });
	// }
	console.log("rating", rating);

	const initialValues = {};

	//useEffect
	useEffect(() => {
		axios
			.get(
				`http://localhost:8080/eventAdd/getOneEvent/${props.match.params._id}`
			)
			.then((res) => {
				console.log("event ", res.data);
				setEvent(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const formik = useFormik({
		initialValues,
	});

	return (
		<>
			<ViewEventHeader />
			{/* Page content */}
			<Container className="mt--9" fluid>
				<Row>
					<Col className="order-xl-1" xl="12">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="7">
										<h1 className="mb-0">Details of The Event</h1>
									</Col>
									<Col className="text-right" xs="3">
										<Link to={`/customerProvider/${event._id}`}>
											<Button color="primary" size="sm">
												Customer Details
											</Button>
										</Link>
									</Col>
									<Col className="text-right" xs="2">
										<Link to={`/serviceprovider/createQuotation/${event._id}`}>
											<Button color="primary" size="sm">
												Apply Quotation
											</Button>
										</Link>
										<Modal
											className="modal-dialog-centered modal-danger"
											contentClassName="bg-gradient-danger"
											isOpen={defaultModal}
											toggle={() => toggleModal("defaultModal")}
										>
											<div className="modal-header">
												<h6
													className="modal-title"
													id="modal-title-notification"
												>
													Give your Rate & Review
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
												<div className="py-3 text-center">
													<i className="ni ni-bell-55 ni-3x" />
													<h4 className="heading mt-4">
														You should read this!
													</h4>
													<p>
														A small river named Duden flows by their place and
														supplies it with the necessary regelialia.
													</p>
													{/* <span>
                    <i className={
                      formik.value >= 1
                      ? "fas fa-star"
                      : formik.value >= 0.5
                      ? "fas fa-star-half-alt"
                      : "fas fa-star"
                    }
                    color="yellow" />
                    </span> */}

													{/* <StarRatingComponent name="rate1" starCount={5} value={rating} onStarClick={onStarClick.bind(this)} /> */}

													<div>
														{[...Array(5)].map((star, i) => {
															const ratingValue = i + 1;

															return (
																<label>
																	<Input
																		style={{ display: "none" }}
																		type="radio"
																		name="rating"
																		value={ratingValue}
																		onClick={() => setRating(ratingValue)}
																	/>
																	<FaStar
																		className="star"
																		color={
																			ratingValue <= (hover || rating)
																				? "#ffc107"
																				: "#e4e5e9"
																		}
																		size={50}
																		onMouseOver={() => setHover(ratingValue)}
																		onMouseOut={() => setHover(null)}
																	/>
																</label>
															);
														})}
													</div>

													<Col md="12">
														<FormGroup>
															<label>Review</label>
															<Input
																id="exampleFormControlTextarea1"
																placeholder="Enter Your Review..."
																rows="3"
																type="textarea"
																name="review"

																// onChange={formik.handleChange}
																// onBlur={formik.handleBlur}
																// value={formik.values.description}
															/>
														</FormGroup>
													</Col>
												</div>
											</div>
											<div className="modal-footer">
												<Button
													className="btn-white"
													color="default"
													type="button"
												>
													Ok, Got it
												</Button>
												<Button
													className="text-white ml-auto"
													color="link"
													data-dismiss="modal"
													type="button"
													onClick={() => toggleModal("defaultModal")}
												>
													Close
												</Button>
											</div>
										</Modal>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Form>
									<Row>
										<Col md="6">
											<FormGroup>
												<label>Event Name : </label>
												<label className="ml-3"> {event.event_name} </label>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<label>Event Type : </label>
												<label className="ml-3"> {event.event_type} </label>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="6">
											<FormGroup>
												<label>Organization Name : </label>
												<label className="ml-3">{event.org_name}</label>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<label>Date of The Event : </label>
												<label className="ml-3">
													{" "}
													{event.date_of_the_event}{" "}
												</label>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="6">
											<FormGroup>
												<label>Event Time : </label>
												<label className="ml-3"> {event.event_time} </label>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<label>Days Event Occurs : </label>
												<label className="ml-3"> {event.days_occurs} day</label>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="6">
											<FormGroup>
												<label>Location : </label>
												<label className="ml-3"> {event.location} </label>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col>
											<label className="mb-2">Required Services : </label>
										</Col>
									</Row>
									{/* <Col>
                  {
                    event.checkboxOption.map(function(checkbox, index){
                      return <label className="ml-5" key={index}> {checkbox.title} </label>

                    })
                  }
                  </Col> */}
									{/* {(arrayHelper) => (
                    <Col>
                      {event.checkboxOption.map((checkboxOption, index) => {
                        // const boxValue = `event.chechboxOption.${index}`;
                        return <label className="ml-5">{checkboxOption[index]}</label>
                      })}
                    </Col>
                  )} */}

									{/* ----------- This one is correct---------------- */}

									{/* {(arrayHelper) => (
                  <div>
                  {event.checkboxOption.map(boxValue => {
                      return <label className="ml-5" key={boxValue.checkboxOption}> {boxValue.checkboxOption[0]}  </label>
                    }
                    )}
                    </div>
                    )}      */}

									{/* ---------------------------------------------------------- */}

									{/* <Col>
                    <label className="ml-5"> </label>
                  </Col>
                  <Col>
                    <label className="ml-5"> Photography </label>
                  </Col>
                  <Col>
                    <label className="ml-5"> Sound Provider</label>
                  </Col>
                  <Col>
                    <label className="ml-5">Decorators</label>
                  </Col>
                  <Col>
                    <label className="ml-5">Dancers</label>
                  </Col> */}

									<h2 className="mt-5 mb-4">Contact Information</h2>
									<Row>
										<Col md="6">
											<FormGroup>
												<label>Organizer Name : </label>
												<label className="ml-3"> {event.organizer_name} </label>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<label>Organizer's NIC : </label>
												<label className="ml-3"> {event.org_nic} </label>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="6">
											<FormGroup>
												<label>Email : </label>
												<label className="ml-3"> {event.cus_email} </label>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<label>Contact Number : </label>
												<label className="ml-3"> {event.cus_con_number} </label>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="10">
											<FormGroup>
												<label>Description : </label>
												<label className="ml-3"> {event.description} </label>
											</FormGroup>
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

export default EventDisplaySP;
