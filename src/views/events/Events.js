import ReactDatetime from "react-datetime";
import API from "variables/tokenURL";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	Input,
	Container,
	Row,
	Col,
	Table,
} from "reactstrap";
// core components
import EventListHeader from "components/Headers/Events/EventListHeader.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Events = (props) => {
	const [posts, setPosts] = useState([]);
	const user = JSON.parse(localStorage.getItem("profile")).result;
	const [searchStr, setSearch] = useState("");

	useEffect(() => {
		API.get(`/serviceProvider/getByUser/${user._id}`)
			.then((res) => {
				let data = res.data;

				API.get(`/company/get/${data.company_id}`).then((res) => {
					let providerType = res.data.service_provider_type;

					console.log(providerType);

					API.get(`/eventAdd/events`).then((res) => {
						const events = res.data;
						console.log(res.data);
						const filterEvents = [];
						events.forEach((event) => {
							event.checkboxOption.forEach((option) => {
								if (option == providerType) {
									filterEvents.push(event);
								}
							});
						});
						setPosts(filterEvents);
						console.log(res.data);
						console.log("filterEvents : ", filterEvents);
					});
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const [exampleModal, setmodalDemo] = useState(false);

	//toggle function
	function toggleModal() {
		setmodalDemo(!exampleModal);
	}

	const deleteEvent = (_id) => {
		API.delete(`/eventAdd/deleteevent/${_id}`)
			.then((response) => {
				console.log(response);
				// props.history.push('/admin');
			})
			.catch((error) => {
				console.log(error);
			});

		//refreshing
		window.location.reload(false);
	};

	return (
		<>
			<EventListHeader />
			{/* Page content */}
			<Container className="mt--9" fluid>
				<Row>
					<Col className="order-xl-1" xl="12">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="8">
										<h1 className="mb-0">Published Events</h1>
									</Col>
									<Col xs="3">
										<div>
											<Input
												type="text"
												placeholder="Search..."
												style={{
													borderWidth: "2.5px",
													width: "15rem",
													height: "2rem",
													textAlign: "left",
													borderRadius: "15px",
												}}
												onChange={(e) => {
													setSearch(e.target.value);
												}}
											/>
										</div>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Table className="align-items-center" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Event Name</th>
											<th scope="col">Date</th>
											<th scope="col">Location</th>
											<th scope="col">Event Type</th>
											<th scope="col" />
										</tr>
									</thead>
									<tbody>
										{posts
											.filter((r) => {
												if (searchStr === "") {
													return r;
												} else if (
													r.event_name
														.toLowerCase()
														.includes(searchStr.toLowerCase())
												) {
													return r;
												}
											})
											.map((posts) => (
												<tr key={posts._id}>
													<td> {posts.event_name} </td>
													<td> {posts.date_of_the_event} </td>
													<td> {posts.location} </td>
													<td> {posts.event_type} </td>
													<td className="">
														<Link
															to={`/serviceprovider/event-display-sp/${posts._id}`}
														>
															<Button color="primary" size="sm">
																View Event
															</Button>
														</Link>
													</td>
												</tr>
											))}
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Events;
