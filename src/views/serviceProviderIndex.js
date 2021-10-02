import { Pie } from "react-chartjs-2";
// reactstrap components
import {
	Button,
	Card,
	Container,
	Row,
	Col,
	CardBody,
	CardHeader,
	Table,
	Input,
} from "reactstrap";
// core components

import API from "variables/tokenURL";

import AdminHeader from "components/Headers/AdminHeader";
import { useEffect, useState } from "react";
import DashboardHeader from "components/Headers/service-provider-header/DashboardHeader";

const ServiceProviderIndex = (props) => {
	const [posts, setPosts] = useState([]);
	const [pieData, setPieData] = useState([]);
	const [searchStr, setSearch] = useState("");

	const user = JSON.parse(localStorage.getItem("profile")).result;
	useEffect(() => {
		console.log(user._id);
		API.get(`/quotation/quotation-by-provider/${user._id}`)
			.then((res) => {
				let data = res.data;
				setPosts(data);
				let approve = 0;
				let notApprove = 0;
				data.forEach((element) => {
					element.approve ? (approve += 1) : (notApprove += 1);
				});
				console.log(approve, " ", notApprove);
				setPieData([approve, notApprove]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const data = {
		labels: ["Approve", "Pending"],
		datasets: [
			{
				data: pieData,
				backgroundColor: ["#00cc99", "#ffcc00"],
			},
		],
	};

	const [exampleModal, setmodalDemo] = useState(false);

	//toggle function
	function toggleModal() {
		setmodalDemo(!exampleModal);
	}

	return (
		<>
			<DashboardHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<div>
					<div style={{ marginLeft: "10.6rem" }}>
						<Card style={{ width: "50rem" }}>
							<CardHeader>
								<h1 className="text-success">Quotation Status</h1>
							</CardHeader>
							<CardBody>
								<Pie data={data}></Pie>
							</CardBody>
						</Card>
					</div>
				</div>

				<Row className="mt-5">
					<Col className="order-xl-1" xl="12">
						<Card className="bg-secondary shadow me-4">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="8">
										<h1 className="mb-0">Applied Quotation</h1>
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
											<th scope="col">Date From</th>
											<th scope="col">Date To</th>
											<th scope="col">Event Type</th>
											<th scope="col">Telephone</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										{posts
											.filter((r) => {
												if (searchStr === "") {
													return r;
												} else if (
													r.event_id.event_name
														.toLowerCase()
														.includes(searchStr.toLowerCase())
												) {
													return r;
												}
											})
											.map((posts) => (
												<tr key={posts._id}>
													<td> {posts.event_id.event_name} </td>
													<td> {posts.date_from} </td>
													<td> {posts.date_to} </td>
													<td> {posts.event_id.event_type} </td>
													<td> {posts.event_id.cus_con_number} </td>
													<td className="">
														{posts.approve ? (
															<Button color="success" size="sm">
																Approve
															</Button>
														) : (
															<Button color="warning" size="sm">
																Pending
															</Button>
														)}
													</td>
												</tr>
											))}
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
				</Row>

				<Row className="mt-4">
					<Col className="w-50">
						<Card style={{ width: "34rem" }}>
							{/* <CardBody> */}
							<div className="ms-2 my-2">
								<div
									style={{
										width: "525px",
										height: "340px",
										backgroundImage:
											"url(" +
											require("../assets/img/theme/musicEvent.jpg").default +
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
							</div>

							{/* </CardBody> */}
						</Card>
					</Col>
					<Col className="w-50">
						<Card style={{ width: "34rem" }}>
							{/* <CardBody> */}
							<div
								className="ms-2 my-2"
								style={{
									width: "525px",
									height: "340px",
									backgroundImage:
										"url(" +
										require("../assets/img/theme/musicEvent2.jpg").default +
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
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ServiceProviderIndex;
