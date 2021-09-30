import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import {
	chartOptions,
	parseOptions,
	chartExample1,
	chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const ServiceProviderIndex = (props) => {
	const [activeNav, setActiveNav] = useState(1);
	const [chartExample1Data, setChartExample1Data] = useState("data1");

	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setChartExample1Data("data" + index);
	};
	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
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
							{/* </CardBody> */}
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ServiceProviderIndex;
