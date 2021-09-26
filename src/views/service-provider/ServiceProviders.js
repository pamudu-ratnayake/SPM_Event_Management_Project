// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	Container,
	Row,
	Col,
	Table,
} from "reactstrap";
import API from "variables/tokenURL";
// core components
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderAllServiceProviders from "components/Headers/service-provider-header/HeaderAllServiceProviders";

const ServiceProviders = (props) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		API.get(`/serviceProvider/`)
			.then((res) => {
				setPosts(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<HeaderAllServiceProviders />
			{/* Page content */}
			<Container className="mt--9" fluid>
				<Row>
					<Col className="order-xl-1" xl="12">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="8">
										<h1 className="mb-0">Aviabale Service Proiders</h1>
									</Col>
									<Col className="text-right" xs="4">
										{/* <Button
											color="primary"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
											size="sm"
										>
											Service Providers
										</Button> */}
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Table className="align-items-center" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">
												<h5>ID</h5>
											</th>
											<th scope="col">
												<h5>User Name</h5>{" "}
											</th>
											<th scope="col">
												<h5>Email</h5>
											</th>
											<th scope="col">
												<h5>Mobile</h5>
											</th>
											<th scope="col">
												<h5>Address</h5>
											</th>
											<th scope="col">
												<h5 className="ms-4"> Action</h5>{" "}
											</th>
										</tr>
									</thead>
									<tbody>
										{posts.map((posts) => (
											<tr key={posts._id}>
												<td> {posts.servic_provider_Id} </td>
												<td> {posts.user_name} </td>
												<td> {posts.email} </td>
												<td> {posts.mobile} </td>
												<td> {posts.address} </td>
												<td className="text-right ">
													<Button
														className="float-start"
														color="danger"
														href="#pablo"
														onClick={() => {
															if (
																window.confirm(
																	"Are you sure you wish to delete this item?"
																)
															) {
																API.delete(
																	`/serviceProvider/delete/${posts._id}`
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
														<i class="ni ni-scissors"></i>
													</Button>
													<Button
														className="float-start"
														color="info"
														type="button"
														href="#pablo"
														size="sm"
														onClick={() => alert(posts._id)}
													>
														<i class="bx bx-edit-alt"></i>
													</Button>
													<Button
														className="me-2 float-start"
														color="success"
														type="button"
														href="#pablo"
														size="sm"
														onClick={() => alert(posts._id)}
													>
														<i className="ni ni-collection"></i>
													</Button>
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

export default ServiceProviders;
