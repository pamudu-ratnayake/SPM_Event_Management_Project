import ReactDatetime from "react-datetime";
import API from "variables/tokenURL";

// reactstrap components
import {
	Button,
	Modal,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Table,
} from "reactstrap";
// core components
import EventListHeader from "components/Headers/Events/EventListHeader.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Events = (props) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		API.get(`/eventAdd/getevents`)
			.then((res) => {
				const events = res.data;
				const filterEvents = [];
				events.forEach((event) => {
					event.checkboxOption.forEach((option) => {
						if (option == "Sound Provider") {
							filterEvents.push(event);
						}
					});
				});
				setPosts(filterEvents);
				console.log(res.data);
				console.log("filterEvents : ", filterEvents);
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
										{posts.map((posts) => (
											<tr key={posts._id}>
												<td> {posts.event_name} </td>
												<td> {posts.date_of_the_event} </td>
												<td> {posts.location} </td>
												<td> {posts.event_type} </td>
												<td className="">
													<Link to={`/admin/event-display-sp/${posts._id}`}>
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
