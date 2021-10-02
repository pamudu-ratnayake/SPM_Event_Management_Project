// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const EventListHeader = () => {
	return (
		<>
			<div
				className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
				style={{
					minHeight: "450px",
					backgroundImage:
						"url(" +
						require("../../../assets/img/theme/event11.jpg").default +
						")",
					backgroundSize: "cover",
					backgroundPosition: "center bottom",
				}}
			>
				{/* Mask */}
				<span className="mask bg-gradient-default opacity-5" />
				{/* Header container */}
				<Container className="d-flex align-items-center" fluid>
					<Row>
						<Col lg="12" md="10">
							<h1 className="display-2 text-white">Events For You</h1>
							{/* <p className="text-white mt-0 mb-2">
              </p> */}
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default EventListHeader;
