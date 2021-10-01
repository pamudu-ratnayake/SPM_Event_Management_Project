// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const HeaderAllServiceProviders = () => {
	return (
		<>
			<div
				className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
				style={{
					minHeight: "450px",
					backgroundImage:
						"url(" +
						require("../../../assets/img/theme/cover_service_provider.jpg")
							.default +
						")",
					backgroundSize: "cover",
					backgroundPosition: "center top",
				}}
			>
				{/* Mask */}
				<span className="mask bg-gradient-default opacity-6" />
				{/* Header container */}
				<Container className="d-flex align-items-center" fluid>
					<Row>
						<Col>
							<h1 className="display-3 text-white">Malith Madusankha</h1>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default HeaderAllServiceProviders;
